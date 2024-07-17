// Unity Academy 2D Simple Platformer Game Demo
//
// A and D: Walk left and right
// W: Jump
//

import {init_unity_academy_3d, init_unity_academy_2d, set_start, set_update,
instantiate, delta_time, instantiate_sprite, same_gameobject, destroy,
translate_world,get_key_down, get_key, get_key_up, get_position, copy_position,
set_position, get_rotation_euler, set_rotation_euler, rotate_world,
get_scale, set_scale, play_animator_state, add_impulse_force,
apply_rigidbody, get_angular_velocity, get_mass, get_velocity,
set_angular_velocity, set_mass, set_use_gravity ,set_velocity,
on_collision_enter, on_collision_stay, on_collision_exit,
get_main_camera_following_target, vector3, get_x, get_y, vector_difference,gui_label,gui_button }
from "unity_academy";

init_unity_academy_2d();

// Load custom sprite from URL (Need CORS Cross-Domain header)

const mario = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario.png");

//迷宫的外围
const ground = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const ground1 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const ground2 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const ground3 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const ground4 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const ground5 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const ground6 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const ground7 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const ground8 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const ground9 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const ground10 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const ground11 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const ground12 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const ground13 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const ground14 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const ground15 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const ground16 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const ground17 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const ground18 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const ground19 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");

const wall1 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const wall2 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const wall3 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const wall4 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const wall5 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const wall6 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const wall7 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const wall8 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const wall9 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const wall10 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const wall11 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const wall12 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const wall13 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const wall14 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const wall15 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const wall16 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const wall17 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const wall18 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const wall19 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const wall20 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");


//迷宫内的水平
const leftgg1 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const leftgg2 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const leftgg3 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const leftgg4 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const leftgg5 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const leftgg6 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const leftgg7 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const leftgg8 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const leftgg9 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const leftgg10 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const leftgg11 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const leftgg12 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const leftgg13 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const leftgg14 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const leftgg15 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");

const rightgg1 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const rightgg2 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const rightgg3 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const rightgg4 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const rightgg5 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const rightgg6 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const rightgg7 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const rightgg8 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const rightgg9 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const rightgg10 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const rightgg11 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const rightgg12 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const rightgg13 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const rightgg14 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
//

//迷宫内的垂直
const leftww1 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const leftww2 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const leftww3 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const leftww4 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const leftww5 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const leftww6 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const leftww7 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const leftww8 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const leftww9 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const leftww10 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const leftww11 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const leftww12 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const leftww13 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const leftww14 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const leftww15 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const leftww16 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const leftww17 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const leftww18 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const leftww19 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const leftww20 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");

const rightww1 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const rightww2 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const rightww3 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const rightww4 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const rightww5 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const rightww6 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const rightww7 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const rightww8 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const rightww9 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const rightww10 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const rightww11 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const rightww12= instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const rightww13 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const rightww14 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const rightww15 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const rightww16 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const rightww17 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const rightww18 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const rightww19 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const rightww20 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const rightww21 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const rightww22 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const rightww23 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const rightww24 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const rightww25 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
const rightww26 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mario_ground.png");
// //

// //垃圾的图片引用
let mystery_box1 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mystery_box.png");
let mystery_box2 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mystery_box.png");


let mushroom = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mushroom.png");



// //马里奥捡垃圾的计数器
let box_counter = 0; 
// //游戏结束
let game_over = false;

const main_cam_target = get_main_camera_following_target();


function start_player(gameObject){
    set_position(gameObject, vector3(2, 1, 0));
    set_scale(gameObject, vector3(0.5, 0.5, 1));
    apply_rigidbody(gameObject);
    set_use_gravity(gameObject, false);
}

// //迷宫的外围
const start_ground = (gameObject) => set_position(gameObject, vector3(2, -2, 0));
const start_ground1 = (gameObject) => set_position(gameObject, vector3(6, -2, 0));
const start_ground2 = (gameObject) => set_position(gameObject, vector3(10, -2, 0));
const start_ground3 = (gameObject) => set_position(gameObject, vector3(14, -2, 0));
const start_ground4 = (gameObject) => set_position(gameObject, vector3(18, -2, 0));
const start_ground5 = (gameObject) => set_position(gameObject, vector3(22, -2, 0));
const start_ground6 = (gameObject) => set_position(gameObject, vector3(26, -2, 0));
const start_ground7 = (gameObject) => set_position(gameObject, vector3(30, -2, 0));
const start_ground8 = (gameObject) => set_position(gameObject, vector3(34, -2, 0));
const start_ground9 = (gameObject) => set_position(gameObject, vector3(38, -2, 0));
const start_ground10 = (gameObject) => set_position(gameObject, vector3(38, 38, 0));
const start_ground11 = (gameObject) => set_position(gameObject, vector3(2, 38, 0));
const start_ground12 = (gameObject) => set_position(gameObject, vector3(6, 38, 0));
const start_ground13 = (gameObject) => set_position(gameObject, vector3(10, 38, 0));
const start_ground14 = (gameObject) => set_position(gameObject, vector3(14, 38, 0));
const start_ground15 = (gameObject) => set_position(gameObject, vector3(18, 38, 0));
const start_ground16 = (gameObject) => set_position(gameObject, vector3(22, 38, 0));
const start_ground17 = (gameObject) => set_position(gameObject, vector3(26, 38, 0));
const start_ground18 = (gameObject) => set_position(gameObject, vector3(30, 38, 0));
const start_ground19 = (gameObject) => set_position(gameObject, vector3(34, 38, 0));

const start_wall1 = (gameObject) => {
    set_position(gameObject, vector3(0, 0, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const start_wall2 = (gameObject) => {
    set_position(gameObject,  vector3(0, 4, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const start_wall3 = (gameObject) => {
    set_position(gameObject, vector3(0, 8, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const start_wall4 = (gameObject) => {
    set_position(gameObject,  vector3(0, 12, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const start_wall5 = (gameObject) => {
    set_position(gameObject, vector3(0, 16, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const start_wall6 = (gameObject) => {
    set_position(gameObject,  vector3(0, 20, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const start_wall7 = (gameObject) => {
    set_position(gameObject, vector3(0, 24, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const start_wall8 = (gameObject) => {
    set_position(gameObject,  vector3(0, 28, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const start_wall9 = (gameObject) => {
    set_position(gameObject, vector3(0, 32, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const start_wall10 = (gameObject) => {
    set_position(gameObject,  vector3(0, 36, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const start_wall11 = (gameObject) => {
    set_position(gameObject, vector3(40, 0, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const start_wall12 = (gameObject) => {
    set_position(gameObject,  vector3(40, 4, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const start_wall13 = (gameObject) => {
    set_position(gameObject, vector3(40, 8, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const start_wall14 = (gameObject) => {
    set_position(gameObject,  vector3(40, 12, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const start_wall15 = (gameObject) => {
    set_position(gameObject, vector3(40, 16, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const start_wall16 = (gameObject) => {
    set_position(gameObject,  vector3(40, 20, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const start_wall17 = (gameObject) => {
    set_position(gameObject, vector3(40, 24, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const start_wall18 = (gameObject) => {
    set_position(gameObject,  vector3(40, 28, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const start_wall19 = (gameObject) => {
    set_position(gameObject, vector3(40, 32, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const start_wall20 = (gameObject) => {
    set_position(gameObject,  vector3(40, 36, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
//

//迷宫内的水平
const leftg1 = (gameObject) => set_position(gameObject, vector3(2,2,0));
const leftg2 = (gameObject) => set_position(gameObject, vector3(6,2,0));
const leftg3 = (gameObject) => set_position(gameObject, vector3(6,10,0));
const leftg4 = (gameObject) => set_position(gameObject, vector3(10,10,0));
const leftg5 = (gameObject) => set_position(gameObject, vector3(6,14,0));
const leftg6 = (gameObject) => set_position(gameObject, vector3(14,14,0));
const leftg7 = (gameObject) => set_position(gameObject, vector3(18,14,0));
const leftg8 = (gameObject) => set_position(gameObject, vector3(2,18,0));
const leftg9 = (gameObject) => set_position(gameObject, vector3(18,18,0));
const leftg10 = (gameObject) => set_position(gameObject, vector3(6,22,0));
const leftg11 = (gameObject) => set_position(gameObject, vector3(10,26,0));
const leftg12 = (gameObject) => set_position(gameObject, vector3(18,26,0));
const leftg13 = (gameObject) => set_position(gameObject, vector3(14,30,0));
const leftg14 = (gameObject) => set_position(gameObject, vector3(2,34,0));
const leftg15 = (gameObject) => set_position(gameObject, vector3(6,34,0));

const rightg1 = (gameObject) => set_position(gameObject, vector3(30,2,0));
const rightg2 = (gameObject) => set_position(gameObject, vector3(34,2,0));
const rightg3 = (gameObject) => set_position(gameObject, vector3(22,18,0));
const rightg4 = (gameObject) => set_position(gameObject, vector3(34,18,0));
const rightg5 = (gameObject) => set_position(gameObject, vector3(22,22,0));
const rightg6 = (gameObject) => set_position(gameObject, vector3(26,22,0));
const rightg7 = (gameObject) => set_position(gameObject, vector3(30,22,0));
const rightg8 = (gameObject) => set_position(gameObject, vector3(38,22,0));
const rightg9 = (gameObject) => set_position(gameObject, vector3(34,26,0));
const rightg10 = (gameObject) => set_position(gameObject, vector3(30,30,0));
const rightg11 = (gameObject) => set_position(gameObject, vector3(38,30,0));
const rightg12 = (gameObject) => set_position(gameObject, vector3(22,34,0));
const rightg13 = (gameObject) => set_position(gameObject, vector3(34,34,0));
const rightg14 = (gameObject) => set_position(gameObject, vector3(38,34,0));


//迷宫内的垂直
const leftw1 = (gameObject) => {
    set_position(gameObject, vector3(12, 0, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const leftw2 = (gameObject) => {
    set_position(gameObject, vector3(16, 0, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const leftw3 = (gameObject) => {
    set_position(gameObject, vector3(8, 4, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const leftw4 = (gameObject) => {
    set_position(gameObject, vector3(12, 4, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const leftw5 = (gameObject) => {
    set_position(gameObject, vector3(16, 4, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const leftw6 = (gameObject) => {
    set_position(gameObject, vector3(4, 8, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const leftw7 = (gameObject) => {
    set_position(gameObject, vector3(16, 8, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const leftw8 = (gameObject) => {
    set_position(gameObject, vector3(8, 16, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const leftw9 = (gameObject) => {
    set_position(gameObject, vector3(8, 20, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const leftw10 = (gameObject) => {
    set_position(gameObject, vector3(12, 20, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const leftw11 = (gameObject) => {
    set_position(gameObject, vector3(4, 24, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const leftw12 = (gameObject) => {
    set_position(gameObject, vector3(12, 24, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const leftw13 = (gameObject) => {
    set_position(gameObject, vector3(16, 24, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const leftw14 = (gameObject) => {
    set_position(gameObject, vector3(4, 28, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const leftw15 = (gameObject) => {
    set_position(gameObject, vector3(8, 28, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const leftw16 = (gameObject) => {
    set_position(gameObject, vector3(16, 28, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const leftw17 = (gameObject) => {
    set_position(gameObject, vector3(8, 32, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const leftw18 = (gameObject) => {
    set_position(gameObject, vector3(12, 32, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const leftw19 = (gameObject) => {
    set_position(gameObject, vector3(16, 32, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const leftw20 = (gameObject) => {
    set_position(gameObject, vector3(12, 36, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};

const rightw1 = (gameObject) => {
    set_position(gameObject, vector3(24, 0, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const rightw2 = (gameObject) => {
    set_position(gameObject, vector3(20, 4, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const rightw3 = (gameObject) => {
    set_position(gameObject, vector3(24, 4, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const rightw4 = (gameObject) => {
    set_position(gameObject, vector3(28, 4, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const rightw5 = (gameObject) => {
    set_position(gameObject, vector3(36, 4, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const rightw6 = (gameObject) => {
    set_position(gameObject, vector3(20, 8, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const rightw7 = (gameObject) => {
    set_position(gameObject, vector3(24, 8, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const rightw8 = (gameObject) => {
    set_position(gameObject, vector3(32, 8, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const rightw9 = (gameObject) => {
    set_position(gameObject, vector3(36, 8, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const rightw10 = (gameObject) => {
    set_position(gameObject, vector3(20, 12, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const rightw11 = (gameObject) => {
    set_position(gameObject, vector3(24, 12, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const rightw12 = (gameObject) => {
    set_position(gameObject, vector3(28, 12, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const rightw13 = (gameObject) => {
    set_position(gameObject, vector3(32, 12, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const rightw14 = (gameObject) => {
    set_position(gameObject, vector3(20, 16, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const rightw15 = (gameObject) => {
    set_position(gameObject, vector3(28, 16, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const rightw16 = (gameObject) => {
    set_position(gameObject, vector3(36, 16, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const rightw17 = (gameObject) => {
    set_position(gameObject, vector3(32, 20, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const rightw18 = (gameObject) => {
    set_position(gameObject, vector3(36, 20, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const rightw19 = (gameObject) => {
    set_position(gameObject, vector3(32, 24, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const rightw20 = (gameObject) => {
    set_position(gameObject, vector3(24, 28, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const rightw21 = (gameObject) => {
    set_position(gameObject, vector3(28, 28, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const rightw22 = (gameObject) => {
    set_position(gameObject, vector3(32, 28, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const rightw23 = (gameObject) => {
    set_position(gameObject, vector3(20, 32, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const rightw24 = (gameObject) => {
    set_position(gameObject, vector3(24, 32, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const rightw25 = (gameObject) => {
    set_position(gameObject, vector3(28, 32, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};
const rightw26 = (gameObject) => {
    set_position(gameObject, vector3(24, 36, 0));
    set_rotation_euler(gameObject,  vector3(0, 0, 90));
};


//垃圾设定的位置
const start_mystery_box1 = (gameObject) => set_position(gameObject, vector3(6, 5, 0));
const start_mystery_box2 = (gameObject) => set_position(gameObject, vector3(4, 5, 0));
//


const start_mushroom = (gameObject) => set_position(gameObject, vector3(3, 5, 0));



//控制马里奥的移动
function update_player(gameObject){
    if (game_over) {
        return game_over;
    }
    const moveSpeed = 3;
    if (get_key("A")) {
        translate_world(gameObject, vector3(-delta_time() * moveSpeed, 0, 0));
    }
    if (get_key("D")) {
        translate_world(gameObject, vector3(delta_time() * moveSpeed, 0, 0));
    }
    if (get_key("W")) {
        translate_world(gameObject, vector3(0, delta_time() * moveSpeed, 0));
    }
    if (get_key("S")) {
        translate_world(gameObject, vector3(0, -delta_time() * moveSpeed, 0));
    }
    set_rotation_euler(gameObject, vector3(0, 0, 0));
    copy_position(gameObject, main_cam_target, vector3(0, 0, 999999)); 
}




//马里奥碰到垃圾，垃圾就消失
function marioOnCollisionEnter(self, other) {
    if (same_gameobject(other, mystery_box1)) {
        destroy(mystery_box1);
        box_counter = box_counter+ 1;  // Increment counter when mario collides with mystery_box1
    }
    if (same_gameobject(other, mystery_box2)) {
        destroy(mystery_box2);
        box_counter = box_counter+ 1;  // Increment counter when mario collides with mystery_box2
    }
    if (same_gameobject(other, mushroom)) {
        destroy(mushroom);
        game_over = true;  // Set game over state when mario collides with mushroom
    }
}

function reset_game() {
    set_position(mario, vector3(2, 2, 0));
    box_counter = 0;
    game_over = false;
    
    // Reinstantiate the mystery boxes and mushroom
    mystery_box1 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mystery_box.png");
    set_start(mystery_box1, start_mystery_box1);
    on_collision_enter(mario, marioOnCollisionEnter); // Ensure collision event is registered again

    mystery_box2 = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mystery_box.png");
    set_start(mystery_box2, start_mystery_box2);
    on_collision_enter(mario, marioOnCollisionEnter); // Ensure collision event is registered again

    mushroom = instantiate_sprite("https://unity-academy.s3.ap-southeast-1.amazonaws.com/external_assets/mushroom.png");
    set_start(mushroom, start_mushroom);
    on_collision_enter(mario, marioOnCollisionEnter); // Ensure collision event is registered again
}

//重新开始游戏按钮
const gui_update = () => {
    if (game_over) {
        gui_label("<color=#FF0000>Game Over</color>", 800, 400); // Display "Game Over" message
    } else {
        gui_label("<color=#AA00FF>control</color>", 100, 60); // Label for controls
        gui_label("Box Counter: " + box_counter, 100, 400); // Display counter
        
    }
     gui_button("Restart Game", 100, 100, 200, 50, reset_game);
};



//迷宫的外围
set_start(ground, start_ground);
set_start(ground1, start_ground1);
set_start(ground2, start_ground2);
set_start(ground3, start_ground3);
set_start(ground4, start_ground4);
set_start(ground5, start_ground5);
set_start(ground6, start_ground6);
set_start(ground7, start_ground7);
set_start(ground8, start_ground8);
set_start(ground9, start_ground9);
set_start(ground10, start_ground10);
set_start(ground11, start_ground11);
set_start(ground12, start_ground12);
set_start(ground13, start_ground13);
set_start(ground14, start_ground14);
set_start(ground15, start_ground15);
set_start(ground16, start_ground16);
set_start(ground17, start_ground17);
set_start(ground18, start_ground18);
set_start(ground19, start_ground19);

set_start(wall1, start_wall1);
set_start(wall2, start_wall2);
set_start(wall3, start_wall3);
set_start(wall4, start_wall4);
set_start(wall5, start_wall5);
set_start(wall6, start_wall6);
set_start(wall7, start_wall7);
set_start(wall8, start_wall8);
set_start(wall9, start_wall9);
set_start(wall10, start_wall10);
set_start(wall11, start_wall11);
set_start(wall12, start_wall12);
set_start(wall13, start_wall13);
set_start(wall14, start_wall14);
set_start(wall15, start_wall15);
set_start(wall16, start_wall16);
set_start(wall17, start_wall17);
set_start(wall18, start_wall18);
set_start(wall19, start_wall19);
set_start(wall20, start_wall20);


//迷宫内的水平
set_start(leftgg1,leftg1);
set_start(leftgg2,leftg2);
set_start(leftgg3,leftg3);
set_start(leftgg4,leftg4);
set_start(leftgg5,leftg5);
set_start(leftgg6,leftg6);
set_start(leftgg7,leftg7);
set_start(leftgg8,leftg8);
set_start(leftgg9,leftg9);
set_start(leftgg10,leftg10);
set_start(leftgg11,leftg11);
set_start(leftgg12,leftg12);
set_start(leftgg13,leftg13);
set_start(leftgg14,leftg14);
set_start(leftgg15,leftg15);

set_start(rightgg1,rightg1);
set_start(rightgg2,rightg2);
set_start(rightgg3,rightg3);
set_start(rightgg4,rightg4);
set_start(rightgg5,rightg5);
set_start(rightgg6,rightg6);
set_start(rightgg7,rightg7);
set_start(rightgg8,rightg8);
set_start(rightgg9,rightg9);
set_start(rightgg10,rightg10);
set_start(rightgg11,rightg11);
set_start(rightgg12,rightg12);
set_start(rightgg13,rightg13);
set_start(rightgg14,rightg14);

//迷宫内的垂直
set_start(leftww1,leftw1);
set_start(leftww2,leftw2);
set_start(leftww3,leftw3);
set_start(leftww4,leftw4);
set_start(leftww5,leftw5);
set_start(leftww6,leftw6);
set_start(leftww7,leftw7);
set_start(leftww8,leftw8);
set_start(leftww9,leftw9);
set_start(leftww10,leftw10);
set_start(leftww11,leftw11);
set_start(leftww12,leftw12);
set_start(leftww13,leftw13);
set_start(leftww14,leftw14);
set_start(leftww15,leftw15);
set_start(leftww16,leftw16);
set_start(leftww17,leftw17);
set_start(leftww18,leftw18);
set_start(leftww19,leftw19);
set_start(leftww20,leftw20);

set_start(rightww1,rightw1);
set_start(rightww2,rightw2);
set_start(rightww3,rightw3);
set_start(rightww4,rightw4);
set_start(rightww5,rightw5);
set_start(rightww6,rightw6);
set_start(rightww7,rightw7);
set_start(rightww8,rightw8);
set_start(rightww9,rightw9);
set_start(rightww10,rightw10);
set_start(rightww11,rightw11);
set_start(rightww12,rightw12);
set_start(rightww13,rightw13);
set_start(rightww14,rightw14);
set_start(rightww15,rightw15);
set_start(rightww16,rightw16);
set_start(rightww17,rightw17);
set_start(rightww18,rightw18);
set_start(rightww19,rightw19);
set_start(rightww10,rightw10);
set_start(rightww21,rightw21);
set_start(rightww22,rightw22);
set_start(rightww23,rightw23);
set_start(rightww24,rightw24);
set_start(rightww25,rightw25);
set_start(rightww26,rightw26);

//迷宫内的垃圾
set_start(mystery_box1, start_mystery_box1);
set_start(mystery_box2, start_mystery_box2);

set_start(mushroom, start_mushroom);

set_start(mario, start_player);
set_update(mario, update_player);

set_update(main_cam_target, gui_update); 

on_collision_enter(mario, marioOnCollisionEnter);
