from django.shortcuts import render
from django.contrib.auth import authenticate
from django.conf import settings

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response

from .serializer import CreateAccountSerializer
from .models import Account
import requests
import os

BASE_DIR = settings.BASE_DIR

GET_JWT_URL = "http://127.0.0.1:8000/api/token"


def access_user_folder(user_email):
    os.chdir(os.path.join(BASE_DIR, "storage", user_email))


def return_to_base_dir():
    os.chdir(BASE_DIR)


def save_file(file_name, file):
    if os.path.exists(file_name):
        os.remove(file_name)
    with open(file_name, "wb") as new_file:
        new_file.write(file.read())


return_to_base_dir()


def get_jwt_token_after_authentication(url, email, password):
    body = {
        "email": email,
        "password": password
    }
    response = requests.post(url, data=body)
    return response.json()


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def upload_profile_image(request, *args, **kwargs):
    try:
        user_email = request.user.email
        account = Account.objects.get(email=user_email)
        file = request.data["image"]
        mime_type = file.name.split(".")[-1]
        access_user_folder(user_email)
        save_file("profile."+mime_type, file)
        BASE_IMG_URL = "http://127.0.0.1:8000/storage"
        account.profile_image_path = f"{BASE_IMG_URL}/{user_email}/profile.{mime_type}"
        account.save()
        return_to_base_dir()
        return Response({"msg": account.profile_image_path})
    except Exception as e:
        return_to_base_dir()
        return Response({"msg": str(e)}, status=400)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_profile_image(request, *args, **kwargs):
    try:
        user_email = request.user.email
        account = Account.objects.get(email=user_email)
        profile_image_url = account.profile_image_path
        return Response({"msg": profile_image_url})
    except Exception as e:
        return Response({"msg": str(e)}, status=400)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_profile_username(request, *args, **kwargs):
    try:
        user_email = request.user.email
        account = Account.objects.get(email=user_email)
        profile_username = account.username
        return Response({"msg": profile_username})
    except Exception as e:
        return Response({"msg": str(e)}, status=400)


@api_view(["POST"])
@permission_classes([AllowAny])
def create_account(request, *args, **kwargs):
    data = request.data
    email = data["email"]
    username = data["username"]
    password = data["password"]
    if authenticate(email=email, password=password):
        return Response({"msg": "User already exists"}, status=200)

    serializer = CreateAccountSerializer(data=data)

    if serializer.is_valid(raise_exception=True):
        user = Account.objects.create(email=email, username=username)
        user.set_password(password)
        user.save()
        jwt_and_refesh_token_info = get_jwt_token_after_authentication(
            GET_JWT_URL, email, password)
        os.chdir("storage")
        os.mkdir(email)
        os.chdir("../")
        return Response({"msg": "User has been created", **jwt_and_refesh_token_info}, status=200)
    return Response({"msg": "Account creation was unsuccessful."}, status=400)


@api_view(["POST"])
@permission_classes([AllowAny])
def login_account(request, *args, **kwargs):
    data = request.data
    email = data["email"]
    password = data["password"]
    if authenticate(email=email, password=password):
        jwt_and_refesh_token_info = get_jwt_token_after_authentication(
            GET_JWT_URL, email, password)
        return Response({"msg": "User was successfully logged in", **jwt_and_refesh_token_info}, status=200)
    return Response({"msg": "Account login was unsuccessful. Please try again."}, status=400)
