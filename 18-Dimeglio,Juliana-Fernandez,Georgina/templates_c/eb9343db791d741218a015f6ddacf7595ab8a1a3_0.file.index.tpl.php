<?php
/* Smarty version 3.1.33, created on 2019-10-06 22:13:46
  from 'C:\xampp\htdocs\WEBII\18-Dimeglio,Juliana-Fernandez,Georgina\templates\index.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.33',
  'unifunc' => 'content_5d9a4afad422e9_02300578',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'eb9343db791d741218a015f6ddacf7595ab8a1a3' => 
    array (
      0 => 'C:\\xampp\\htdocs\\WEBII\\18-Dimeglio,Juliana-Fernandez,Georgina\\templates\\index.tpl',
      1 => 1570392823,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:header.tpl' => 1,
    'file:footer.tpl' => 1,
  ),
),false)) {
function content_5d9a4afad422e9_02300578 (Smarty_Internal_Template $_smarty_tpl) {
?><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equipv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <title><?php echo $_smarty_tpl->tpl_vars['Titulo']->value;?>
</title>
</head>
<body id="index">
   <?php $_smarty_tpl->_subTemplateRender("file:header.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>
    <div class="container">
        <section>
            <div id="frase">
                <h1>En <?php echo $_smarty_tpl->tpl_vars['Titulo']->value;?>
 Te invitamos a conocer el maravilloso mundo de los doramas. No te pierdas nuestros recomendados: </h1>
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
   <?php $_smarty_tpl->_subTemplateRender("file:footer.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>
    <?php echo '<script'; ?>
 src="js/jquery.js"><?php echo '</script'; ?>
>
    <?php echo '<script'; ?>
 src="js/bootstrap.min.js"><?php echo '</script'; ?>
>
</body>
</html><?php }
}
