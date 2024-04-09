use todol;

create table todos(
id int primary key auto_increment,
task varchar(50) not null,
created_at timestamp default current_timestamp,
completed boolean default false
);



