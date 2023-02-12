package com.yeargun.auth.postrecommendation;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import java.util.List;


//DOCUMENT BASED MAYBE. @ me in case you change the db. I am very sorry (yeargun)
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
