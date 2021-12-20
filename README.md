# ***`ㅤㅤㅤㅤㅤㅤㅤㅤㅤＧａｔａＢｏｔㅤㅤㅤㅤㅤㅤㅤㅤㅤ`***

<p align="center">
<img src="https://lh3.googleusercontent.com/proxy/a3h9xT-FdImjfKdvoxwOi0g0QK7P7051NcHXa4DI0GwJOxEDTID_P9mzsFLgjIfLcVyo5LrSOakDUEiW_6Vx" alt="GIF" width="500" height="281"/>
</p>

<p align="center">
𝐁𝐲 𝐆𝐚𝐭𝐚𝐍𝐢𝐧𝐚-𝐋𝐢
</p>

<p align="center">
!Hola¡ 😺 Bienvenido a este repositorio, Sería agradable una ⭐  de tú parte. ¡Gracias!
</p>



#### 🟢 *Contacto 1*

[![blog](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white
)](https://api.whatsapp.com/send?phone=994407312387&text=¡Hola!%20😸%20vengo%20de%20GitHub)


#### 🟢 *Contacto 2*

[![blog](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white
)](https://api.whatsapp.com/send?phone=994400643818&text=¡Hola!%20😸%20vengo%20de%20GitHub)

#### 🟣 Implementar en Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/GataNina-Li/GataBot)

#### Heroku Buildpack

| BuildPack | ENLACE |
|--------|--------|
| **FFMPEG** |[Aquí](https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest) |
| **IMAGEMAGICK** | [Aquí](https://github.com/DuckyTeam/heroku-buildpack-imagemagick) |

---------

## REQUISITOS

* Tener una conexión estable de internet.
* Tener la aplicación Termux actualizada.
* Un número para el BOT.

---------

### PARA USUARIOS DE TERMUX

```bash
pkg update
pkg upgrade
pkg install bash 
pkg install wget
wget -O - https://raw.githubusercontent.com/GataNina-Li/GataBot/main/install2.sh | bash
```
---------

## INSTALAR EN TERMUX CON UBUNTU

[ INSTALANDO UBUNTU ]

```bash
apt update && apt full-upgrade
apt install wget curl git proot-distro
proot-distro install ubuntu
echo "proot-distro login ubuntu" > $PREFIX/bin/ubuntu
ubuntu
```
---------

[ INSTALANDO PAQUETES REQUERIDOS ]

```bash
ubuntu
apt update && apt full-upgrade
apt install wget curl git ffmpeg imagemagick build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev dbus-x11 ffmpeg2theora ffmpegfs ffmpegthumbnailer ffmpegthumbnailer-dbg ffmpegthumbs libavcodec-dev libavcodec-extra libavcodec-extra58 libavdevice-dev libavdevice58 libavfilter-dev libavfilter-extra libavfilter-extra7 libavformat-dev libavformat58 libavifile-0.7-bin libavifile-0.7-common libavifile-0.7c2 libavresample-dev libavresample4 libavutil-dev libavutil56 libpostproc-dev libpostproc55 graphicsmagick graphicsmagick-dbg graphicsmagick-imagemagick-compat graphicsmagick-libmagick-dev-compat groff imagemagick-6.q16hdri imagemagick-common libchart-gnuplot-perl libgraphics-magick-perl libgraphicsmagick++-q16-12 libgraphicsmagick++1-dev
```

---------

[ INSTALANDO NODEJS Y GATABOT ]

```bash
ubuntu
curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash -
apt install -y nodejs gcc g++ make
git clone https://github.com/GataNina-Li/GataBot
cd GataBot
npm install
npm update
```

---------

## PARA USUARIO DE WINDOWS / VPS / RDP

* Descarga e instala Git [`Click Here`](https://git-scm.com/downloads)
* Descargue e instale NodeJS [`Click Here`](https://nodejs.org/en/download)
* Descargue e instale FFmpeg [`Click Here`](https://ffmpeg.org/download.html) (**no olvide agregar FFmpeg a las variables de entorno PATH**)
* Descargue e instale ImageMagick [`Click Here`](https://imagemagick.org/script/download.php)

```bash
git clone https://github.com/GataNina-Li/GataBot
cd GataBot
npm install
npm update
```

---------

## Run

```bash
node .
```

---------

## Argumentos `node . [--options] [<session name>]`

### `--self`

Activar el modo automático (ignora otros).

### `--pconly`

Si ese chat no es de un bot privado, el bot ignorará.

### `--gconly`

Si ese chat no es del grupo, el bot ignorará.

### `--swonly`

Si ese chat no es del estado, el bot ignorará.

### `--prefix <prefixes>`

* `prefixes` están separados por cada prefijo de conjunto de caracteres.

### `--server`

Utilizado para [heroku](https://heroku.com/) o escanear a través del sitio web.

### `--big-qr`

Si el pequeño qr unicode no es compatible.


### `--restrict`

Habilita complementos restringidos (lo que puede hacer que su número sea **prohibido** si se usa con demasiada frecuencia).

* Administración de grupo `add, kick`

### `--img`

Habilitar el inspector de imágenes a través de la terminal.

### `--autoread`

Si está habilitado, todos los mensajes entrantes se marcarán como leídos.

### `--nyimak`

Sin bot, solo imprima los mensajes recibidos y agregue usuarios a la base de datos.

### `--test`

Modo de prueba de **desarrollo**. 

### `--trace`

```js
conn.logger.level = 'trace'
```

### `--debug`

```js
conn.logger.level = 'debug'
```

### `--presence <Presence>`

Cuando el bot ejecuta el comando, el bot escribirá, registrará, etc.

Presencia disponible: disponible, componiendo, grabando, en pausa

---------



### ¿Quieres contribuir?
1. Bifurcar este repositorio
2. Cambia / edita / crea lo que quieras. por ejemplo, puede agregar funciones, corregir errores, etc.
3. Si su solicitud de extracción ya está en acc / merge , puede eliminar su rama o puede crear una solicitud de extracción nuevamente 😸

---------

### CREADOR

[![GataNina-Li](https://github.com/GataNina-Li.png?size=100)](https://github.com/GataNina-Li)

## Gracias a

[![TheShadowBrokers1](https://github.com/TheShadowBrokers1.png?size=100)](https://github.com/TheShadowBrokers1)
[![Nurutomo](https://github.com/Nurutomo.png?size=100)](https://github.com/Nurutomo)
[![BochilGaming](https://github.com/BochilGaming.png?size=100)](https://github.com/BochilGaming)

### Contribuyentes
[![idhamthoriqbot](https://github.com/idhamthoriqbot.png?size=100)](https://github.com/idhamthoriqbot)
[![Adiixyz](https://github.com/Adiixyz.png?size=100)](https://github.com/Adiixyz)
<a href="https://github.com/zatu22"><img src="https://github.com/zatu22.png" width="100" height="100" alt="zatu22"/></a>
[![arisawali2014](https://github.com/arisawali2014.png?size=100)](https://github.com/arisawali2014)
[![Nobuyaki](https://github.com/Nobuyaki.png?size=100)](https://github.com/Nobuyaki)
[![unx21](https://github.com/unx21.png?size=100)](https://github.com/unx21)
[![botstylee](https://github.com/botstylee.png?size=100)](https://github.com/botstylee)
[![qisyana](https://github.com/qisyana.png?size=100)](https://github.com/qisyana)
[![ryznxx](https://github.com/ryznxx.png?size=100)](https://github.com/ryznxx)
<a href="https://github.com/apps/dependabot"><img src="https://avatars.githubusercontent.com/in/29110?v=4" width="100" height="100" alt="@dependabot[bot]"/></a>
[![itsmeR1F4I](https://github.com/itsmeR1F4I.png?size=100)](https://github.com/itsmeR1F4I)
[![ZeroChanBot](https://github.com/ZeroChanBot.png?size=100)](https://github.com/ZeroChanBot)
