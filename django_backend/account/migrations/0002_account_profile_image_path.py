# Generated by Django 2.2 on 2020-06-29 20:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='account',
            name='profile_image_path',
            field=models.CharField(blank=True, default=None, max_length=100, null=True),
        ),
    ]
