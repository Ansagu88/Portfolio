"""core URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, re_path, include
from django.views.generic import TemplateView
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path("api/blog/", include("apps.blog.urls")),
    path("api/category/", include("apps.category.urls")),
    path('admin/', admin.site.urls),

    path('ckeditor/', include('ckeditor_uploader.urls')),
    
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


urlpatterns += [
    # ... another routes go to index.html ...
    path('', TemplateView.as_view(template_name='index.html'), name='index'),
]


# Thsi is the old way to do it
# urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]