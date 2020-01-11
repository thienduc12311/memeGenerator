import React, { Component } from "react"

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
           topText: "",
           bottomText: "",
           randomImg: "https://i.pinimg.com/736x/6b/e0/98/6be098435eb128a88d9dc0f07a1e554f.jpg",
           allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({allMemeImgs: memes})
            })
    }
    
    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }
    
    handleSubmit(event) {
        event.preventDefault()
        const rand = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[rand].url
        this.setState({randomImg: randMemeImg})
    }

    render() {
        return (
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input hspace="80" 
                        type="text" 
                        placeholder="Top Text"
                        onChange={this.handleChange}
                        name="topText"
                        value={this.state.topText}
                    />
                    <input 
                        type="text" 
                        placeholder="Bottom Text"
                        onChange={this.handleChange}
                        name="bottomText"
                        value={this.state.bottomText}
                    />
                    <button className="btn btn-primary">Gen</button>
                </form>
                <div className="meme">
                    <img class="center"style={{width:'750px'}} src={this.state.randomImg} alt="" height="650px"/>
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator