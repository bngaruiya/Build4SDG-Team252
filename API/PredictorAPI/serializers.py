from rest_framework import serializers
from PredictorAPI.models import ImageUploads

# Predict Serializer
class ImageUploadSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImageUploads
        fields = '__all__'

    