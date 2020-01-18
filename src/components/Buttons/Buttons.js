import React from 'react';
import {Button} from './buttonStyles';

function PunchLineButton(props) {
  return (
  <Button display={props.display} onClick={(e) => { props.func(e) }}>{props.label}</Button>
  );
}//end func

function DadButton(props) {
  return (
    <Button display= {props.display} onClick={(e) => { props.func(e) }}>{props.label}</Button>
  );
}//end func

function ChuckButton(props) {
  return (
    <Button onClick={(e) => { props.func(e) }}>{props.label}</Button>
  );
}//end func

function GeekButton(props) {
  return (
    <Button onClick={(e) => { props.func(e) }}>{props.label}</Button>
  );
}//end func

export {PunchLineButton, DadButton, ChuckButton, GeekButton};