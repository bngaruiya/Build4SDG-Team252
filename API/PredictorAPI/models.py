from django.db import models as djangoModel
from django.conf import settings

import os
import torch
import json
from PIL import Image
from torchvision import models, transforms
from torch import nn
from collections import OrderedDict

# Create your models here.
class ImageUploads(djangoModel.Model):
    image = djangoModel.ImageField(upload_to='pred_images')
    prediction = djangoModel.CharField(max_length=100, blank=True, null=True)

    def save(self, *args, **kwargs):
        self.prediction = classify(self.image)
        print('Done classifying Image')
        super(ImageUploads, self).save(*args, **kwargs)

    # def __str__(self):
    #     return self.prediction

def classify(image):
    img = Image.open(image).convert('RGB')
    img_tensor = transform(img)
    prediction_model = load_model()
    prediction_model.eval()
    with torch.no_grad():
        output = prediction_model(img_tensor)
        pred = torch.argmax(output).item()
    if(pred > 5.0):
        classes = load_class_names()
        prediction = classes[pred]
    else:
        prediction = "Unknown"
    print(pred)
    return prediction

def load_model():
    model_dict = "model_transfer.pt"
    path = os.path.join(settings.CLASSIFICATION_MODEL_ROUTE, model_dict)
    device = torch.device('cpu')
    model = models.resnet152(pretrained=True)
    classes = load_class_names()
    classifier = nn.Sequential(OrderedDict([
                        ('fc1', nn.Linear(2048, 512)),
                        ('relu', nn.ReLU()),
                        ('fc2', nn.Linear(512, len(classes))),
                        ]))
    model.fc = classifier
    model.load_state_dict(torch.load(path, map_location=device))
    return model

def load_class_names():
    class_names = "classes.json"
    path = os.path.join(settings.CLASSIFICATION_MODEL_ROUTE, class_names)
    classes = []
    with open(path, 'r') as f:
        class_dict = json.load(f)
        for key, value in class_dict.items():
            classes.append(value)
    return classes

def transform(img):
    image_preprocess = transforms.Compose([
                        transforms.Resize(224),
                        transforms.CenterCrop(224),
                        transforms.ToTensor(),
                        transforms.Normalize(
                            [0.4548, 0.4758, 0.3215],
                            [0.4548, 0.4758, 0.3215])
                        ])
    image_tensor = image_preprocess(img).unsqueeze(0)
    return image_tensor