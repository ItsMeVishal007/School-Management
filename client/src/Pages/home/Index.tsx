import React from "react";
import Text from "../../components/Text";
import '../../styles/home/Home.scss'
const Index: React.FC = () => {
  return (
    <div>
      <Text hType='h3' text='Home Page' />
      <div className='navBar'>
                <div className='navBar_container'>
                    <div className='navBar_content'>
                        <h3>Logo</h3>
                    </div>
                    <div className='navBar_content'>
                    <h3>Home</h3>
                    </div>
                    <div className='navBar_content'>
                    <h3>Courses</h3>
                    </div>
                    <div className='navBar_content'>
                    <h3>Sports</h3>
                    </div>
                    <div className='navBar_content'>
                    <h3>Library</h3>
                    </div>
                    <div className='navBar_content'>
                    <h3>Logout</h3>
                    </div>
                </div>
            </div>
    </div>
  );
};

export default Index;
