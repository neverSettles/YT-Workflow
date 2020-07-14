from django.contrib import admin
from django.urls import path, include

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path("api/token", TokenObtainPairView.as_view(), name="get-jwt"),
    path("api/refresh", TokenRefreshView.as_view(), name="get-refresh"),
    path("", include("account.urls")),
    path("", include("workflows.urls"))

] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
