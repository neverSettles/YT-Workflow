from django.db import models

from account.models import Account
from workflows.models import Workflow
import datetime


class ShareWorkflowModel(models.Model):

    creator = models.ForeignKey(
        Account, default=None, on_delete=models.CASCADE, related_name="creator")
    person_sharing = models.ForeignKey(
        Account, default=None, on_delete=models.CASCADE, related_name="person_sharing")
    recipient = models.ForeignKey(
        Account, default=None, on_delete=models.CASCADE, related_name="person_who_received")
    workflow = models.ForeignKey(
        Workflow, default=None, on_delete=models.CASCADE)
    created_at = models.DateTimeField(default=datetime.datetime.now())

    def serialize(self):
        return {
            "id": self.id,
            "creator": self.creator.email,
            "recipient": self.recipient.email,
            "created_at": self.created_at
        }
