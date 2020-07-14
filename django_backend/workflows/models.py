from django.db import models

# from django.contrib.auth.models import Account
from account.models import Account
import datetime


class Workflow(models.Model):
    creator = models.ForeignKey(
        Account, default=None, on_delete=models.CASCADE)
    title = models.TextField(default="Create title", null=True)
    created_at = models.DateTimeField(default=datetime.datetime.now())
    description = models.TextField(null=True, default="")
    starred = models.BooleanField(default=False)
    finished = models.BooleanField(default=False)
    other_users = models.ManyToManyField(
        Account, related_name="users_shared_with")

    def serialize(self):
        return {
            "id": self.id,
            "creator": self.creator.email
        }
