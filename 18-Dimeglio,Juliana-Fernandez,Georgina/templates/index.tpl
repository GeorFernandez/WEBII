<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equipv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <title>{$Titulo}</title>
</head>
<body id="index">
   {include file="header.tpl"}
    <div class="container">
        <section>
            <div id="frase">
                <h1>En {$Titulo} Te invitamos a conocer el maravilloso mundo de los doramas. No te pierdas nuestros recomendados: </h1>
            </div>
            <div class="row">
            <div class="col">
                <article>
                    <h2 class="ranking">Ranking Top Ten Doramas:</h2>
                    <ol>
                        <li>Goblin</li>
                        <li>Scarlet Heart</li>
                        <li>Bride of the water god</li>
                        <li>Cinderella and four knights</li>
                        <li>Memories of the Alhambra</li>
                        <li>Good Doctor</li>
                        <li>Faith</li>
                        <li>Strong woman do bong soon</li>
                        <li>Are you Human too?</li>
                        <li>Athena</li>
                    </ol>
                </article>

                <article>
                    <h2 class="ranking">Ranking Top Ten Películas:</h2>
                    <ol class="lista">
                        <li>Train to Busan</li>
                        <li>The Swimmers</li>
                        <li>A man and a woman</li>
                        <li>A werewolf boy</li>
                        <li>Forgotten</li>
                        <li>Always</li>
                        <li>Psychokinesis</li>
                        <li>Seom</li>
                        <li>The Handmaden</li>
                        <li>Bom yeoreum gaeul gyeoul geurigo bom</li>
                    </ol>
                </article>
            </div>
            <div class="col-12 .d-none, .d-sm-block col-sm-6">
                <aside>
                    <div >
                        <a href="https://www.pocky.com/" target="_blank"><img class="publicidad" src="imagesB/publicidadPokis.png" alt="Pokis"></a> 
                    </div>
                    <div>
                        <a href="https://comic-con.com.ar/" target="_blank"><img class="publicidad" src="imagesB/comicCon.jpg" alt="ComicCon"></a> 
                    </div>
                </aside>
            </div>
        </div>
        </section>
    </div>
   {include file="footer.tpl"}
    <script src="js/jquery.js"></script>
    <script src="js/bootstrap.min.js"></script>
</body>
</html>