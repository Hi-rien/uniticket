
create table uni_member (
  id varchar(15) not null,
  pass varchar(15) not null,
  name varchar(10) not null,
  hp varchar(20) not null,
  email varchar(80) not null,
  addr varchar(80) not null,
  primary key(id)
)engine=innoDB charset=utf8;

insert into member values ('uniticket','123456','유니티켓','010-1234-1234','uniticket@naver.com','서울시 마포구');