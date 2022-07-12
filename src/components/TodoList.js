import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

import { useTodoState } from '../TodoContext';


const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-x: auto;
    display: inline-block;
`;

const TodoListBlock2 = styled.div`
    flex: 1;
    padding: 0px 32px;
    padding-bottom: 48px;
    overflow-x: auto;
    display: inline-block;
    border-left: 1px solid #e9ecef;
    `;

const TodoListBlock3 = styled.div`
    flex: 1;
    padding: 0px 32px;
    padding-bottom: 48px;
    overflow-x: auto;
    display: inline-block;
    border-left: 1px solid #e9ecef;
`;

const TodoListBlock4 = styled.div`
    flex: 1;
    padding: 0px 32px;
    padding-bottom: 48px;
    overflow-x: auto;
    display: inline-block;
    border-left: 1px solid #e9ecef;
`;

const TodoListBlock5 = styled.div`
    flex: 1;
    padding: 0px 32px;
    padding-bottom: 48px;
    overflow-x: auto;
    display: inline-block;
    border-left: 1px solid #e9ecef;
`;

const TodoListBlock6 = styled.div`
    flex: 1;
    padding: 0px 32px;
    padding-bottom: 48px;
    overflow-x: auto;
    display: inline-block;
    border-left: 1px solid #e9ecef;
`;
 
const TodoListBlock7 = styled.div`
    flex: 1;
    padding: 0px 32px;
    padding-bottom: 48px;
    overflow-x: auto;
    display: inline-block;
    border-left: 1px solid #e9ecef;
`;
 
 
 
function TodoList() {

    const todos = useTodoState();
    
    
    return (
        <div>
        <TodoListBlock>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
    </TodoListBlock>

      <TodoListBlock2>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
      </TodoListBlock2>
      <TodoListBlock3>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
      </TodoListBlock3>
      <TodoListBlock4>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
      </TodoListBlock4>
      <TodoListBlock5>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
      </TodoListBlock5>
      <TodoListBlock6>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
      </TodoListBlock6>
      <TodoListBlock7>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
      </TodoListBlock7>
      
      </div>
      
    );
}
 

export default TodoList;