from rest_framework import serializers

from .models import Workflow


class WorkflowSerializer(serializers.ModelSerializer):

    creator = serializers.SerializerMethodField()
    other_users = serializers.SerializerMethodField()

    class Meta:
        model = Workflow
        fields = ['id', "creator", "title", 'created_at',
                  'description', 'starred', "finished", "other_users"]

    def get_creator(self,obj):
        return obj.creator.email

    def get_other_users(self,obj):
        shared_emails = []
        for user in obj.other_users.all():
            shared_email = user.email
            shared_emails.append(shared_email)
        return shared_emails
