# Multiplica y Reparte

Juego para aprender multiplicación y división (tablas, números grandes, problemas, decimales y resto).
App web (`www/`) empaquetada como APK con Capacitor.

- Valores por defecto: tablas hasta el 10, resultados hasta 100 (configurable en Ajustes).
- Varios jugadores, cada uno con sus estrellas, ajustes, estadísticas y racha diaria.
- Copia de seguridad: código para copiar/restaurar los avances (pantalla del jugador).
- Funciona sin conexión (fuentes incluidas).

## APK
GitHub Actions compila la APK en cada push a `main` (artefacto `MultiplicaYReparte-apk`).
Para una release: `git tag v1.0.0 && git push --tags`.

## Desarrollo local
```
npm install
npx cap sync android   # requiere JDK 21 para compilar con Gradle
```
