# Generated by Django 5.0 on 2025-02-08 02:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0005_alter_course_options_alter_review_options'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='slug',
            field=models.CharField(max_length=100, unique=True),
        ),
    ]
