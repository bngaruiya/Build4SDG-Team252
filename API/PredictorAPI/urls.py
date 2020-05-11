from django.contrib import admin
from django.urls import path
from rest_framework import routers
from .api import PredictViewSet

router = routers.DefaultRouter()
router.register('api/predict', PredictViewSet, 'imageupload')

urlpatterns = router.urls