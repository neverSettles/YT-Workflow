from django.shortcuts import render
from django.conf import settings

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response

from .serializer import WorkflowSerializer
import os
import shutil
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
from account.models import Account
from .models import Workflow
from share_workflows.models import ShareWorkflowModel

BASE_DIR = settings.BASE_DIR


def access_user_folder(user_email):
    os.chdir(os.path.join("storage", user_email))


def access_file_type_folder(workflow_id, file_type):
    os.chdir(os.path.join("workflow_"+str(workflow_id), file_type))


def return_to_base_dir(num_dirs_to_go_back=None):
    if not num_dirs_to_go_back:
        os.chdir(BASE_DIR)
        return
    os.chdir("../"*num_dirs_to_go_back)


def save_file(file_name, file):
    with open(file_name, "wb") as file_new:
        file_new.write(file.read())


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def upload_file(request, workflow_id, file_type, *args, **kwargs):
    try:
        workflow = Workflow.objects.get(id=workflow_id)
        file = request.data["file"]
        status = 200
        msg = ""
        access_user_folder(workflow.creator.email)

        if workflow:
            access_file_type_folder(workflow_id, file_type)
            cleaned_file_name = file.name.replace(" ", "-")
            if os.path.exists(cleaned_file_name):
                os.remove(cleaned_file_name)
            save_file(cleaned_file_name, file)
            msg = f"{file_type} file successfully uploaded"
        else:
            msg = "workflow does not exist"
            status = 400
        return_to_base_dir()
        return Response({"msg": msg}, status=status)
    except Exception as e:
        return_to_base_dir()
        return Response({"msg": str(e)}, status=400)


@api_view(["DELETE"])
@permission_classes([IsAuthenticated])
def delete_file(request, workflow_id, file_type, *args, **kwargs):
    try:
        workflow = Workflow.objects.get(id=workflow_id)
        file_name = request.data["file_name"]
        access_user_folder(workflow.creator.email)
        msg = ""
        status = 200
        if workflow:
            access_file_type_folder(workflow_id, file_type)
            if os.path.exists(file_name):
                os.remove(file_name)
            return_to_base_dir(4)
            msg = "file deleted"
        else:
            return_to_base_dir(2)
            msg = "workflow does not exist"
        return_to_base_dir()
        return Response({"msg": msg}, status=status)
    except Exception as e:
        return_to_base_dir()
        return Response({"msg": str(e)}, status=400)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_workflow_files_of_specific_type(request, workflow_id, file_type, *args, **kwargs):
    workflow = Workflow.objects.get(id=workflow_id)
    if workflow:
        access_user_folder(workflow.creator.email)
        workflow_folder_name = f"workflow_{workflow_id}"
        access_file_type_folder(workflow_id, file_type)
        BASE_IMG_URL = "http://127.0.0.1:8000/storage"
        file_urls = []
        for file in os.listdir("./"):
            file_url = f"{BASE_IMG_URL}/{workflow.creator.email}/{workflow_folder_name}/{file_type}/{file}"
            file_urls.append(file_url)
        return_to_base_dir()
        return Response({"workflow-specific-urls": file_urls}, status=200)
    return Response({"msg": "workflow does not exist"}, status=400)


@api_view(["PUT"])
@permission_classes([IsAuthenticated])
def toggle_workflow_starred(request, workflow_id, *args, **kwargs):
    msg = ""
    status = 200
    workflow = Workflow.objects.get(id=workflow_id)
    if workflow:
        workflow.starred = (not workflow.starred)
        workflow.save()
        msg = f"workflow starred has been marked {workflow.starred}"
    else:
        msg = "workflow does not exist"
        status = 400
    return Response({"msg": msg}, status=status)


@api_view(["PUT"])
@permission_classes([IsAuthenticated])
def toggle_workflow_finished(request, workflow_id, *args, **kwargs):
    msg = ""
    status = 200
    workflow = Workflow.objects.get(id=workflow_id)
    if workflow:
        workflow.finished = (not workflow.finished)
        workflow.save()
        msg = f"workflow finished has been marked {workflow.finished}"
    else:
        msg = "workflow does not exist"
        status = 400
    return Response({"msg": msg}, status=status)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_description(request, workflow_id, *args, **kwargs):
    workflow = Workflow.objects.get(id=workflow_id)
    msg = None
    status = None
    if workflow:
        msg = workflow.description
        status = 200
    else:
        msg = "workflow does not exist"
        status = 400
    return Response({"description": msg}, status=status)


@api_view(["PUT"])
@permission_classes([IsAuthenticated])
def set_workflow_description(request, workflow_id, *args, **kwargs):
    description = request.data["description"]
    msg = ""
    status = 200
    workflow = Workflow.objects.get(id=workflow_id)
    if workflow:
        workflow.description = description
        workflow.save()
        msg = "workflow description has been saved"
    else:
        msg = "workflow does not exist"
        status = 400
    return Response({"msg": msg}, status=status)


@api_view(["PUT"])
@permission_classes([IsAuthenticated])
def set_workflow_title(request, workflow_id, *args, **kwargs):
    title = request.data["title"]
    msg = ""
    status = 200
    workflow = Workflow.objects.get(id=workflow_id)
    if workflow:
        workflow.title = title
        workflow.save()
        msg = "workflow title has been saved"
    else:
        msg = "workflow does not exist"
        status = 400
    return Response({"msg": msg}, status=status)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_workflows(request, *args, **kwargs):
    user = request.user
    workflows_for_user = Workflow.objects.filter(creator=user)
    serialized_workflows = WorkflowSerializer(workflows_for_user, many=True)
    return Response({"workflows": serialized_workflows.data})


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_shared_workflows(request, *args, **kwargs):
    user = request.user
    shares_for_user = ShareWorkflowModel.objects.filter(recipient=user)
    shared_workflows = []
    for share_for_user in shares_for_user:
        shared_workflows.append(share_for_user.workflow)
    serialized_shared_workflows = WorkflowSerializer(
        shared_workflows, many=True)
    return Response({"workflows": serialized_shared_workflows.data})


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_workflow_profile_images(request, workflow_id, *args, **kwargs):
    workflow = Workflow.objects.get(id=workflow_id)
    if workflow:
        profile_images = {
            workflow.creator.email: workflow.creator.profile_image_path,
        }
        for other_user in workflow.other_users.all():
            profile_images[other_user.email] = other_user.profile_image_path
        return Response({"urls": profile_images})
    else:
        return Response({"msg": "workflow does not exist"})


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_shared_workflow_ids(request, *args, **kwargs):
    user = request.user
    shares_for_users = ShareWorkflowModel.objects.filter(recipient=user)
    shared_workflow_ids = []
    for share in shares_for_users:
        shared_workflow_ids.append(share.workflow.id)
    return Response({"workflow-ids": shared_workflow_ids})


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_workflow_ids(request, *args, **kwargs):
    user = request.user
    workflows_for_user = Workflow.objects.filter(creator=user)
    workflow_ids = [workflow.id for workflow in workflows_for_user]
    return Response({"workflow-ids": workflow_ids})


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_workflow_with_id(request, workflow_id, *args, **kwargs):
    workflow = Workflow.objects.get(id=workflow_id)
    if workflow:
        serialized_workflow = WorkflowSerializer(workflow)
        return Response({"workflow": serialized_workflow.data})
    else:
        msg = "workflow does not exist"
        status = 400
        return Response({"workflow": msg}, status=status)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_workflow_files(request, workflow_id, *args, **kwargs):
    workflow = Workflow.objects.get(id=workflow_id)
    if workflow:
        access_user_folder(workflow.creator.email)
        file_types = ["audio", "video", "image", "video_editing", "thumbnail"]
        res_file = {}
        workflow_folder_name = f"workflow_{workflow_id}"
        for file_type in file_types:
            access_file_type_folder(workflow_id, file_type)
            BASE_IMG_URL = "http://127.0.0.1:8000/storage"
            file_urls = []
            for file in os.listdir("./"):
                file_url = f"{BASE_IMG_URL}/{workflow.creator.email}/{workflow_folder_name}/{file_type}/{file}"
                file_urls.append(file_url)
            res_file[file_type] = file_urls
            return_to_base_dir(2)
        return_to_base_dir(2)
        return Response({"workflow-file-urls": res_file}, status=200)
    else:
        msg = "workflow does not exist"
        status = 400
        return Response({"workflow": msg}, status=status)


@api_view(["DELETE"])
@permission_classes([IsAuthenticated])
def delete_workflow(request, workflow_id, *args, **kwargs):
    workflow = Workflow.objects.get(id=workflow_id)
    status = 200
    msg = ""
    if workflow:
        workflow.delete()
        access_user_folder(workflow.creator.email)
        shutil.rmtree(f"workflow_{workflow_id}")
        msg = f"workflow {workflow_id} has been deleted"
        return_to_base_dir()
    else:
        msg = "workflow does not exist"
        return_to_base_dir()
        status = 400
    return Response({"msg": msg}, status=status)


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def create_workflow(request, *args, **kwargs):
    try:
        user = request.user
        user_email = user.email
        new_workflow = Workflow.objects.create(creator=user)
        access_user_folder(user_email)
        os.mkdir("workflow_"+str(new_workflow.id))
        os.chdir("workflow_"+str(new_workflow.id))
        folders = ["image", "video", "audio", "video_editing", "thumbnail"]
        for folder in folders:
            os.mkdir(folder)
        return_to_base_dir()
        return Response({"msg": "workflow has successfully been created", "workflow": new_workflow.serialize()})
    except Exception as e:
        return_to_base_dir()
        return Response({"msg": str(e)}, status=400)


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def share_workflow(request, workflow_id, *args, **kwargs):
    try:
        new_email = request.data["email"]
        new_user = Account.objects.get(email=new_email)
        if new_user == request.user:
            return Response({"msg": "The user and the user being shared with are the same. They must be different."}, status=400)
        workflow = Workflow.objects.get(id=workflow_id)
        msg = ""
        status = 200
        if workflow and new_user:
            workflow.other_users.add(new_user)
            ShareWorkflowModel.objects.create(
                creator=workflow.creator, person_sharing=request.user, recipient=new_user, workflow=workflow)
            shared_emails = []
            for user in workflow.other_users.all():
                shared_email = user.email
                shared_emails.append(shared_email)
            msg = shared_emails
        else:
            msg = "Workflow or user does not exist"
            status = 400
        return Response({"msg": msg}, status=status)

    except Exception as e:
        return Response({"msg": str(e)}, status=400)


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def unshare_workflow(request, workflow_id, *args, **kwargs):
    try:
        workflow = Workflow.objects.get(id=workflow_id)
        other_email = request.data["email"]
        other_user = Account.objects.get(email=other_email)
        if other_user == request.user:
            return Response({"msg": "The user and the user being unshared are the same. They must be different."}, status=400)
        msg = ""
        status = 200
        if workflow and other_user:
            workflow.other_users.remove(other_user)
            share_instance_to_delete = ShareWorkflowModel.objects.get(
                workflow=workflow, recipient=other_user)
            share_instance_to_delete.delete()
            msg = "workflow has been unshared"
        else:
            msg = "workflow or user does not exist"
            status = 400
        return Response({"msg": msg}, status=status)
    except Exception as e:
        return Response({"msg": str(e)}, status=400)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def orig_shared_workflows_data(request, *args, **kwargs):
    try:
        user = request.user

        orig_workflows = Workflow.objects.filter(creator=user)
        shared_workflow = ShareWorkflowModel.objects.filter(recipient=user)

        num_orig_workflows = len(orig_workflows)
        num_shared_workflows = len(shared_workflow)

        return Response({"msg": {"Original Workflows": num_orig_workflows, "Shared Workflows": num_shared_workflows}})
    except Exception as e:
        return Response({"msg": str(e)}, status=400)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def orig_workflows_finished_data(request, *args, **kwargs):
    try:
        user = request.user

        orig_workflows = Workflow.objects.filter(creator=user)

        finished = orig_workflows.filter(finished=True)
        unfinished = orig_workflows.filter(finished=False)

        return Response({"msg": {"Finished": len(finished), "Unfinished": len(unfinished)}})
    except Exception as e:
        return Response({"msg": str(e)}, status=400)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def orig_workflows_starred_data(request, *args, **kwargs):
    try:
        user = request.user

        orig_workflows = Workflow.objects.filter(creator=user)

        starred = orig_workflows.filter(starred=True)
        unstarred = orig_workflows.filter(starred=False)

        return Response({"msg": {"Starred": len(starred), "Unstarred": len(unstarred)}})
    except Exception as e:
        return Response({"msg": str(e)}, status=400)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def workflow_descriptions_data(request, *args, **kwargs):
    try:
        user = request.user

        orig_workflows = Workflow.objects.filter(creator=user)
        data = {}
        for workflow in orig_workflows.all():
            if not workflow:
                data[str(workflow.created_at)] = 0
            else:
                data[str(workflow.created_at)] = len(workflow.description)

        return Response({"msg": data})
    except Exception as e:
        return Response({"msg": str(e)}, status=400)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def workflows_file_breakdown(request, *args, **kwargs):
    try:
        user_email = request.user.email
        access_user_folder(user_email)
        file_types = ["audio", "image", "thumbnail", "video"]
        num_files_dict = {
            "audio": 0,
            "image": 0,
            "thumbnail": 0,
            "video": 0
        }
        workflow_folders = [workflow_folder for workflow_folder in os.listdir(
            "./") if os.path.isdir(workflow_folder)]
        for folder in workflow_folders:
            os.chdir(folder)
            for file_type in file_types:
                os.chdir(file_type)
                num_files = len(os.listdir("./"))
                num_files_dict[file_type] += num_files
                os.chdir("../")
            os.chdir("../")
        return_to_base_dir()
        return Response({"msg": num_files_dict})
    except Exception as e:
        return_to_base_dir()
        return Response({"msg": str(e)}, status=400)
