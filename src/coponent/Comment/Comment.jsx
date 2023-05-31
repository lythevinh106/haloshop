import React from 'react';
import PropTypes from 'prop-types';


import CommentItem from './CommentItem';

Comment.propTypes = {

};
// listBanner.map((banner) => {
//     return (
//         <div className='sub-banner__img' key={banner.id}>
//             <PopperWrapper >


//                 <Image src={banner.image} {...otherProp} />



//             </PopperWrapper>
//         </div>
//     )



// })

function Comment({ comments, onSubmitRepLy = () => { } }) {
    console.log(comments);
    return (
        <div className='comment__item-wrapper'>
            {


                comments.map((comment) => {
                    return comment.parent_comment_id == 0 &&
                        <CommentItem key={comment.id} comment={comment} listComment={comments} onSubmitRepLy={onSubmitRepLy} />




                })



            }





        </div>
    );
}

export default Comment;