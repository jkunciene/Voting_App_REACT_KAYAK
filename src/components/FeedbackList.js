import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ScoreIcon from './ScoreIcon';

import './FeedbackList.css';
export default function FeedbackList({ msg, version = null }) {
  const classes = `Feedback-List Feedback-List-${version}`;
  return (
      <div className={classes}>
        <h1>My first component with {msg}</h1>
        {version && (
            <p>This is v.{version}</p>
        )}
      </div>
  );
}
//
// export default function FeedbackList(props) {
//   const content = <div>My first component with {props.msg}</div>;
//   return content;
// }
// export default function FeedbackList({ feedbackList = [] }) {
//   return (
//     <List>
//       {feedbackList.map(feedback => (
//       <ListItem key={feedback.id}>
//        <ListItemAvatar>
//           <ScoreIcon score={feedback.score}/>
//         </ListItemAvatar>
//         <ListItemText
//           primary={feedback.name}
//           secondary={<> {feedback.datetime} / {feedback.text}</>}
//         />
//       </ListItem>
//       ))}
//     </List>
//   );
// }