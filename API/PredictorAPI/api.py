from rest_framework import viewsets, permissions

from PredictorAPI.models import ImageUploads
from PredictorAPI.serializers import ImageUploadSerializer

# PredictViewset
class PredictViewSet(viewsets.ModelViewSet):
    # queryset = ImageUploads.objects.all()
    permission_classes = [
        permissions.IsAuthenticated
    ]
    
    serializer_class = ImageUploadSerializer

    def get_queryset(self):
        return self.request.user.user_image_uploads.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)