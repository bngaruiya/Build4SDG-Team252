from rest_framework import viewsets, permissions

from PredictorAPI.models import ImageUploads
from PredictorAPI.serializers import ImageUploadSerializer

# PredictViewset
class PredictViewSet(viewsets.ModelViewSet):
    queryset = ImageUploads.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = ImageUploadSerializer