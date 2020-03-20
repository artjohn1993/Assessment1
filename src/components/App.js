import React from 'react';
import faker from 'faker';
import SearchBar from './SearchBar';
import UserDetails from './UserDetail';
import FlagCard from './FlagCard';
import Spinner from './Spinner';


class App extends React.Component {
   
    state = { userInfo : [
        {
        email: faker.internet.email(),
        jobTitle: faker.name.jobTitle(),
        avatar: faker.internet.avatar(),
        content: faker.lorem.sentence(),
        countryCode: faker.address.countryCode()
    },
    {
        email: faker.internet.email(),
        jobTitle: faker.name.jobTitle(),
        avatar: faker.internet.avatar(),
        content: faker.lorem.sentence(),
        countryCode: faker.address.countryCode()
    },
    {
        email: faker.internet.email(),
        jobTitle: faker.name.jobTitle(),
        avatar: faker.internet.avatar(),
        content: faker.lorem.sentence(),
        countryCode: faker.address.countryCode()
    },
    {
        email: faker.internet.email(),
        jobTitle: faker.name.jobTitle(),
        avatar: faker.internet.avatar(),
        content: faker.lorem.sentence(),
        countryCode: faker.address.countryCode()
    },
    {
        email: faker.internet.email(),
        jobTitle: faker.name.jobTitle(),
        avatar: faker.internet.avatar(),
        content: faker.lorem.sentence(),
        countryCode: faker.address.countryCode()
    },
    {
        email: faker.internet.email(),
        jobTitle: faker.name.jobTitle(),
        avatar: faker.internet.avatar(),
        content: faker.lorem.sentence(),
        countryCode: faker.address.countryCode()
    },
    {
        email: faker.internet.email(),
        jobTitle: faker.name.jobTitle(),
        avatar: faker.internet.avatar(),
        content: faker.lorem.sentence(),
        countryCode: faker.address.countryCode()
    },
    {
        email: faker.internet.email(),
        jobTitle: faker.name.jobTitle(),
        avatar: faker.internet.avatar(),
        content: faker.lorem.sentence(),
        countryCode: faker.address.countryCode()
    },
    {
        email: faker.internet.email(),
        jobTitle: faker.name.jobTitle(),
        avatar: faker.internet.avatar(),
        content: faker.lorem.sentence(),
        countryCode: faker.address.countryCode()
    },
    {
        email: faker.internet.email(),
        jobTitle: faker.name.jobTitle(),
        avatar: faker.internet.avatar(),
        content: faker.lorem.sentence(),
        countryCode: faker.address.countryCode()
    }
],
index: null,
isTyping: false};



    renderContent = () => {
        if(this.state.index != null && !this.state.isTyping) {
            return(
                <div className="ui cards">
                    <div className="card" style={{padding: '10px'}}>
                        <UserDetails 
                            avatar={this.state.userInfo[this.state.index].avatar}
                            email={this.state.userInfo[this.state.index].email}
                            jobTitle={this.state.userInfo[this.state.index].jobTitle}
                        />
                        <FlagCard 
                            content={this.state.userInfo[this.state.index].content}
                            countryCode={this.state.userInfo[this.state.index].countryCode}
                        />
                    </div>
                </div>
            );
        }
        
        else if(this.state.isTyping) {
            return (
                <Spinner />
            );
        }

        return <div>No data</div>
    }
    
    onSearchBarSubmit = (data) => {
        this.setState({isTyping:  false, index: null});

        this.state.userInfo.forEach((element, index) => {
            if(element.email == data) {
                this.setState({index: index});
            }
        });
    }

    onSearchChange = (data) => {
        data != '' ? this.setState({isTyping:  true}) : this.setState({isTyping:  false, index: null})
    }

    render() {
        console.log(this.state.userInfo);

        return (
            <div style={{padding: '50px'}}>
                <SearchBar 
                    onSubmit={this.onSearchBarSubmit}
                    onChange={this.onSearchChange}
                    />
                {this.renderContent()}
            </div>
        );
    }
}

export default App;