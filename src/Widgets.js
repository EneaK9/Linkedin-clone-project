import React from 'react';
import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import CircleIcon from '@mui/icons-material/Circle';

function Widgets() {
    const newsArticle = (heading, subtitle) => {
        return (
            <div className='widgets_article'>
                <div className='widget_articleLeft'>
                    <CircleIcon />
                </div>
                <div className='widget_articleRight'>
                    <h4>{heading}</h4>
                    <p>{subtitle}</p>
                </div>
            </div>
        );
    };

    return (
        <div className='widgets'>
            <div className='widgets_header'>
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("PAPA React is back", "Top news - 999 Readers")}
            {newsArticle("Coronavirus: Albania updates", "Top news - 861 Readers")}
            {newsArticle("Tesla hits new highs", "Cars & auto - 500 Readers")}
            {newsArticle("Is Redux too good?", "Code- 499 Readers")}
            {newsArticle("Bitcoin breaks $15K", "Crypto - 2000 Readers")}
        </div>
    );
}

export default Widgets