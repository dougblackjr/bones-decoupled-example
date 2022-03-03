<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

$config['autosave_interval_seconds'] = '10';
$config['enable_dock'] = 'y';
$config['enable_frontedit'] = 'y';
$config['automatic_frontedit_links'] = 'y';
$config['enable_mfa'] = 'y';
$config['site_license_key'] = '';
// ExpressionEngine Config Items
// Find more configs and overrides at
// https://docs.expressionengine.com/latest/general/system-configuration-overrides.html

$config['app_version'] = '6.2.7';
$config['encryption_key'] = '8ff4246460b17e769fec51b7ae3ba70efc51d5f1';
$config['session_crypt_key'] = 'ee51db2a1c9f227e6a8fc073d33c8fdebda65704';
// Import the database and add your credentials
$config['database'] = array(
	'expressionengine' => array(
		'hostname' => 'localhost',
		'database' => 'bones_decoupled_example',
		'username' => 'root',
		'password' => '',
		'dbprefix' => 'exp_',
		'char_set' => 'utf8mb4',
		'dbcollat' => 'utf8mb4_unicode_ci',
		'port'     => ''
	),
);
$config['show_ee_news'] = 'y';
$config['share_analytics'] = 'y';

// Make sure to change your URL and Base Path
$config['base_url'] = 'https://bones-decoupled-example.test';
$config['base_path'] = '/home/doug/sites/bones-decoupled-example';

$config['is_system_on'] = 'y';
$config['index_page'] = '/';
$config['debug'] = '1';
$config['show_profiler'] = 'y';
$config['enable_devlog_alerts'] = 'n';
$config['cache_driver'] = 'dummy';


$config['enable_devlog_alerts'] = 'y';

$config['cache_driver'] = 'dummy';

$config['enable_hit_tracking'] = 'n';
$config['dynamic_tracking_disabling'] = 'n';
$config['enable_entry_view_tracking'] = 'n';
$config['enable_online_user_tracking'] = 'n';

$config['theme_folder_url'] = '{base_url}/themes/';
$config['theme_folder_path'] = '{base_path}/public/themes/';

$config['avatar_url'] = '{base_url}/images/avatars';
$config['emoticon_url'] = '{base_url}/images/smileys/';
$config['avatar_path'] = '{base_path}/public/images/avatars/';

$config['captcha_url'] = '{base_url}/images/captchas/';
$config['captcha_path'] = '{base_path}/public/images/captchas/';

$config['sig_img_url'] = '{base_url}/images/signature_attachments/';
$config['sig_img_path'] = '{base_path}/public/images/signature_attachments/';

$config['prv_msg_upload_url'] = '{base_url}/images/pm_attachments';
$config['prv_msg_upload_path'] = '{base_path}/public/images/pm_attachments/';

$config['speedy_driver'] = 'static';
$config['speedy_static_enabled'] = 'yes';