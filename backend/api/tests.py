from django.test import TestCase


class HealthTestCase(TestCase):
    def test_health_retorna_status_ok(self):
        response = self.client.get("/api/health/")
        self.assertEqual(response.status_code, 200)
        dados = response.json()
        self.assertEqual(dados["status"], "ok")
        self.assertIn("items", dados)
