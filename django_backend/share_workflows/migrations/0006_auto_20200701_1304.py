# Generated by Django 2.2 on 2020-07-01 20:04

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('share_workflows', '0005_auto_20200629_1157'),
    ]

    operations = [
        migrations.AlterField(
            model_name='shareworkflowmodel',
            name='created_at',
            field=models.DateTimeField(default=datetime.datetime(2020, 7, 1, 13, 4, 53, 738720)),
        ),
    ]
