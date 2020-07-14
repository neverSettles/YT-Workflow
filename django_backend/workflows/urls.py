from django.contrib import admin
from django.urls import path

from .views import create_workflow, upload_file, toggle_workflow_starred, toggle_workflow_finished, set_workflow_description, get_workflows, delete_workflow, get_workflow_with_id, set_workflow_title, get_workflow_ids, get_workflow_files, get_description, get_workflow_files_of_specific_type, delete_file, share_workflow, unshare_workflow, get_shared_workflows, get_shared_workflow_ids, get_workflow_profile_images, workflows_file_breakdown, orig_workflows_finished_data, orig_shared_workflows_data, orig_workflows_starred_data, workflow_descriptions_data

urlpatterns = [
    path("create-workflow", create_workflow, name="create-workflow"),
    path("upload-file/<int:workflow_id>/<str:file_type>",
         upload_file, name="upload-file"),
    path("delete-file/<int:workflow_id>/<str:file_type>",
         delete_file, name="delete-file"),
    path("toggle-workflow-starred/<int:workflow_id>",
         toggle_workflow_starred, name="star-workflow"),
    path("toggle-workflow-finished/<int:workflow_id>",
         toggle_workflow_finished, name="finsihed-workflow"),
    path("set-workflow-description/<int:workflow_id>",
         set_workflow_description, name="set-workflow-description"),
    path("set-workflow-title/<int:workflow_id>",
         set_workflow_title, name="set-workflow-title"),
    path("get-workflows", get_workflows, name="get-workflows"),
    path("get-shared-workflows", get_shared_workflows,
         name="get-shared-workflows"),
    path("get-shared-workflow-ids", get_shared_workflow_ids,
         name="get-shared-workflow-ids"),
    path("get-workflow-ids", get_workflow_ids,
         name="get-workflows-ids"),
    path("get-workflow/<int:workflow_id>",
         get_workflow_with_id, name="get-workflow-with-id"),
    path("delete-workflow/<int:workflow_id>",
         delete_workflow, name="delete-workflow"),
    path("get-workflow-files/<int:workflow_id>",
         get_workflow_files, name="workflow-files"),
    path("get-workflow-files/<int:workflow_id>/<str:file_type>",
         get_workflow_files_of_specific_type, name="specific-workflow-files"),
    path("get-workflow-profile-images/<int:workflow_id>",
         get_workflow_profile_images, name="get-profile-images"),
    path("get-workflow-description/<int:workflow_id>",
         get_description, name="workflow-description"),
    path("share-workflow/<int:workflow_id>",
         share_workflow, name="share-workflow"),
    path("unshare-workflow/<int:workflow_id>",
         unshare_workflow, name="unshare-workflow"),
    path("workflows-file-breakdown", workflows_file_breakdown,
         name="workflows-file-breakdown"),
    path("workflows-finished-data", orig_workflows_finished_data,
         name="workflow-finished-breakdown"),
    path("workflows-starred-data", orig_workflows_starred_data,
         name="workflow-starred-breakdown"),
    path("workflows-original-shared-data", orig_shared_workflows_data,
         name="workflow-original-shared-breakdown"),
    path("workflows-description-data", workflow_descriptions_data,
         name="workflows-description-data")
]
