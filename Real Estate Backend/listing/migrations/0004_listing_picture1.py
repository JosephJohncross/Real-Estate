# Generated by Django 4.1.7 on 2023-03-13 22:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('listing', '0003_remove_listing_features_listing_cctv_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='listing',
            name='picture1',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]
