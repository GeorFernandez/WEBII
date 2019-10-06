<?php
/* Smarty version 3.1.33, created on 2019-10-06 22:18:58
  from 'C:\xampp\htdocs\WEBII\18-Dimeglio,Juliana-Fernandez,Georgina\templates\header.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.33',
  'unifunc' => 'content_5d9a4c329ab2d0_28955529',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'dfcae57792d33f10009ecb5e585ea76d2a9fa553' => 
    array (
      0 => 'C:\\xampp\\htdocs\\WEBII\\18-Dimeglio,Juliana-Fernandez,Georgina\\templates\\header.tpl',
      1 => 1570393112,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5d9a4c329ab2d0_28955529 (Smarty_Internal_Template $_smarty_tpl) {
?> <header>
        <nav class="navbar navbar-expand-lg navbar-light home navbar fixed-top ">
            <a class="navbar-brand" href="index.html"><?php echo $_smarty_tpl->tpl_vars['Titulo']->value;?>
</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-item nav-link active" href="ranking.html">Ranking</a>
                    <a class="nav-item nav-link active" href="favoritos.html">Favoritos</a>
                    <a class="nav-item nav-link active" href="contacto.html" target="_blank">Contacto</a>
                </div>
            </div>
        </nav>
    </header><?php }
}
