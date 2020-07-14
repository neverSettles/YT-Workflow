from rest_framework import serializers
from django.contrib.auth import authenticate

from .models import Account

class CreateAccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ("email","username","password")


