from django.test import TestCase
from django.core.files.uploadedfile import SimpleUploadedFile
from mixer.backend.django import mixer

from .models import ImageUploads

# Create your tests here.
class TestImageUploadsModel(TestCase):
    def test_add_imageuploads(self):
        newUpload = ImageUploads()
        file_path = 'E:/Projects/Python/Django/Crop DPA/API/PredictorAPI/images/pred_images/appleBlackRot2.JPG'
        newUpload.image = SimpleUploadedFile(name='appleBlackRot2.JPG', content=open(file_path, 'rb').read())
        newUpload.save()
        self.assertEqual(ImageUploads.objects.count(), 1)