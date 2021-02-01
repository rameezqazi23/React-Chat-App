import { ChatEngine } from 'react-chat-engine';

import './App.css';
import ChatFeed from './components/ChatFeed';



const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="35960980-665e-4c3f-b1eb-5fe098a410f4"
            userName="hamzaqazi"
            userSecret="123456"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}


        />
    );
}

export default App;