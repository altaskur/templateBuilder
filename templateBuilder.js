const fs = require("fs");
const path = require("path");

function folderExist(path) {
  console.log("Checking if folder exists: " + __dirname + path);
  return fs.existsSync(__dirname + "/" + path);
}

function makeFolder(path) {
  return fs.mkdirSync(__dirname + "/" + path);
}

function makeFile(path, content) {
  return fs.writeFileSync(__dirname + "/" + path, content, "utf8");
}

// Path: src

folderExist("src") ? null : makeFolder("src");

// Path: src/assets

folderExist("src/assets") ? null : makeFolder("src/assets");

// Path: src/assets/img

folderExist("src/assets/img") ? null : makeFolder("src/assets/img");

// Path: src/assets/fonts

folderExist("src/assets/fonts") ? null : makeFolder("src/assets/fonts");

// Path: src/assets/css

folderExist("src/assets/css") ? null : makeFolder("src/assets/css");

// make file styles.css

let stylesContent = `
    /* FILE: <styles.css> */

    @import url('_reset.css');

    @import url('_base_variables.css');
    @import url('_typography.css');
    @import url('_navs.css');
    @import url('_main.css');
    @import url('_elements.css');
    @import url('_images.css');
    @import url('_helpers.css');
`;

// !TODO detect GitHub actions compatibility

makeFile("src/assets/css/styles.css", stylesContent);
makeFile("src/assets/css/_base_variables.css", "");
makeFile("src/assets/css/_main.css", "");
makeFile("src/assets/css/_helpers.css", "");
makeFile("src/assets/css/_elements.css", "");
makeFile("src/assets/css/_images.css", "");
makeFile("src/assets/css/_navs.css", "");
makeFile("src/assets/css/_typography.css", "");
makeFile("src/assets/css/_reset.css", "");

// Path: src/index.html

let indexContent = `
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Altaskur Template Project</title>

    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <meta name="title" content="Altaskur Site" />
    <meta name="description" content="" />
    <meta name="keywords"
        content="Google ya no le da tanta importancia, pero todavía las considera (coincidiendo con tus negritas" />

    <meta property="og:type" content="website" />
    <meta property="og:url" content="" />
    <meta property="og:site_name" content="" />
    <meta property="og:title" content="Tiene que coincidir con tu H1" />
    <meta property="og:description" content="" />
    <meta property="og:image" content="" />
    <meta property="og:locale" content="" />

    <meta name="dc.language" content="es/ES" />
    <meta name="dc.source" content="Url" />
    <meta name="dc.title" content="Coincide con tu H1" />
    <meta name="dc.description" content="same" />

    <link rel="shortcut icon" href="../path/imgSample/logos/favicon.png(ico, fav, svg)" />

    <!-- <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"> -->

    <link rel="stylesheet" type="text/css" href="/src/assets/css/styles.css">

    <link rel="stylesheet" type="text/css"
        href="./src/assets/vendor/bootstrap-icons-1.9.1/bootstrap-icons-1.9.1/bootstrap-icons.css">
</head>

<body>
    <header>
        <nav class="navbar-top">
            <div class="navbar-top-inner">
                <ul class="navbar-cnt">
                    <li class="navbar-item"></li>
                </ul>
            </div>
        </nav>
    </header>
    <aside>
        <div class="aside-inner">
            <ul class="aside-cnt">
                <li class="aside-item"></li>
            </ul>
        </div>
    </aside>
    <main>
        <div class="main-inner">
            <section>
                <div class="section-inner">

                    <header>
                        <h1 class="h1"></h1>
                    </header>

                    <h2>This is a subtitle</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam beatae neque expedita quod?
                        Ipsum facere
                        fuga ducimus magni, optio mollitia magnam minima nobis harum eos aperiam numquam ex quo quis.
                    </p>
                </div>
            </section>
        </div>
    </main>
    <footer>
        <div class="footer-inner">
            <ul class="footer-cnt">
                <li class="footer-item"></li>
            </ul>
        </div>
    </footer>
</body>
`;

makeFile("src/index.html", indexContent);
