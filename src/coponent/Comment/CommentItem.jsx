import React from 'react';
import PropTypes from 'prop-types';
import "./style.scss"
import Image from '../Image/Image';
import user from '../../storage/images/user.png';
import FormComment from '../Form/FormComment/FormComment';
import FormCommentSmall from '../Form/FormCommentSmall/FormCommentSmall';

import dayjs from 'dayjs';
import 'dayjs/locale/vi';
import { useEffect } from 'react';
CommentItem.propTypes = {

};

function CommentItem({ comment, listComment, onSubmitRepLy = () => { } }) {

    const localUser = localStorage.getItem("user") || null;


    const subComments = listComment.filter((commentItem) => {
        return commentItem.parent_comment_id == comment?.id;
    })
    // console.log(subComments);

    const handleSubmitReply = (data) => {

        onSubmitRepLy(data, comment.id)
        // console.log(comment.id);
    }


    return (
        <div className='comment__item'>
            <div className="comment__item__avatar">
                <Image src={user} style={{ height: "auto", width: "40px" }}  ></Image>
            </div>
            <div className="comment__item__main">
                <div className="main__name">
                    {comment.user.name}
                </div>

                <div className="main__time">
                    {dayjs(comment.update_at).format('YYYY-MM-DD h:mm A')}
                </div>


                <div className="main__text">
                    {comment.comment_text}
                </div>

                {

                }




                <div className="main__reply">




                    {subComments?.length > 0 && subComments.map((subComment) => (


                        <div className="reply__item" key={subComment?.id}>
                            <div className="reply__item__avatar">
                                <Image src={user} style={{ height: "auto", width: "40px" }} />
                            </div>
                            <div className="reply__item__main">
                                <div className="reply__item__name">
                                    {subComment?.user?.name}
                                </div>
                                <div className="reply__item__time">
                                    {dayjs(subComment?.update_at).format('YYYY-MM-DD h:mm A')}
                                </div>
                                <div className="reply__item__text">
                                    {subComment?.comment_text}
                                </div>
                            </div>
                        </div>
                    ))}








                </div>

                {localUser && comment.user_id != JSON.parse(localUser)?.id &&


                    <div className="comment__item__form">
                        <FormCommentSmall onSubmit={handleSubmitReply} />
                    </div>
                }







            </div>


        </div>
    );
}

export default CommentItem;