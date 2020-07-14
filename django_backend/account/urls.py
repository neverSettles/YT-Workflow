from django.contrib import admin
from django.urls import path

from .views import create_account, login_account, upload_profile_image, get_profile_image, get_profile_username

urlpatterns = [
    path("create-account/", create_account, name="create-account"),
    path("login-account/", login_account, name="login-account"),
    path("upload-profile-image", upload_profile_image,
         name='upload-profile-image'),
    path("get-profile-image", get_profile_image, name='get-profile-image'),
    path("get-profile-username", get_profile_username,
         name="get-profile-username"),
]
