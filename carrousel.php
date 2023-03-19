<?php

/**
 * Extension carrousel permet d'afficher dans une boite modale les images d'une galerie
 * Package name : Carrousel
 * Version: 1.0.0
 */

 /**
  * Plugin name: Carrousel
  * Author: Felix Boutin-Cousineau
  * Plugin URI: https:github.com/kekcardinal/carrousel
  * Description: Carrousel qui permet d'afficher dans une boite modale les images d'une galerie avec un système de navigation
  */

  /* test */
  function carrousel_enqueue(){
  
  $version_css = filemtime(plugin_dir_path(__FILE__ ) . "style.css");
  $version_js = filemtime(plugin_dir_path(__FILE__) . "js/carrousel.js");
  
  wp_enqueue_style(   'em_plugin_carrousel_css',
  plugin_dir_url(__FILE__) . "style.css",
  array(),
  $version_css);
  
  wp_enqueue_script(  'em_plugin_carrousel_js',
  plugin_dir_url(__FILE__) ."js/carrousel.js",
  array(),
  $version_js,
  true);
  }
  
  add_action('wp_enqueue_scripts', 'carrousel_enqueue');
  
  function creation_carrousel()
  {
  return '<div class="carrousel">
  <div class="btn_gauche"></div><div class="btn_droite"></div>
      <button class="carrousel_x">X</button>
      <figure class="carrousel_figure"></figure>
      <form class="carrousel_form"></form>
      </div>';
  }
  add_shortcode('carrousel', 'creation_carrousel');
  ?>