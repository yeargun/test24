package com.yeargun.auth.postrecommendation;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import java.util.List;

public class Post {
    @Id
    @GeneratedValue
    private Integer postId;
    private List<Integer> userIds;
    private String postUrl;
//    private List<Comment> comments;
//    private AccessRule accessRule;
//    private HashMap<PostContent, PostType> postContents;

}
