# Generated by Django 2.2 on 2020-07-01 20:03

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('workflows', '0006_workflow_other_users'),
    ]

    operations = [
        migrations.AlterField(
            model_name='workflow',
            name='created_at',
            field=models.DateTimeField(default=datetime.datetime(2020, 7, 1, 13, 3, 36, 296823)),
        ),
    ]
