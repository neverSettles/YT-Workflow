# Generated by Django 2.2 on 2020-06-09 18:28

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('workflows', '0002_auto_20200608_2142'),
    ]

    operations = [
        migrations.AddField(
            model_name='workflow',
            name='created_at',
            field=models.DateField(default=datetime.date.today),
        ),
    ]
