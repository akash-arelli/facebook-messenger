import React , {forwardRef} from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import './Message.css';

const Message = forwardRef(({  msg  , username } , ref) => {
    console.log(msg);
    const isUser = username === msg.username;
  return (
    <div ref={ref} className={` message ${isUser && 'message_user'}` }>
      <Card className={ isUser ? 'message_usercard' : 'message_guestcard'  }>
        <CardContent>
          <Typography variant="h5" component="h2" color="white">
          
          { !isUser && `${ msg.username || 'Unkown User' }: `} { msg.message }
          </Typography>
        </CardContent>
      </Card>
    
    </div>
  );
})

export default Message;
