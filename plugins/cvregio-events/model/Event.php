<?php
namespace Model;

class Event {
    private $id;
    private $title;
    private $description;
    private $location;
    private $allDay;
    private $start;
    private $end;
    private $category;
    private $categorySlug;

    // private $colorId;
    // private $status;
    // private $visibility;

    public function __construct($id, $title, $description, $location, $allDay, $start, $end)
    {
        $this->id = $id;
        $this->title = $title;
        $this->description = $description;
        $this->location = $location;
        $this->$allDay = $allDay;
        $this->start = $start;
        $this->end = $end;
    }

    public function getCategory() 
    {
        return $this->category;
    }

    public function setCategory($category) 
    {
        $this->category = $category;
    }

    public function getCategorySlug() 
    {
        return $this->categorySlug;
    }

    public function setCategorySlug($categorySlug) 
    {
        $this->categorySlug = $categorySlug;
    }

    public function getEnd() 
    {
        return $this->end;
    }

    public function setEnd($end) 
    {
        $this->end = $end;
    }

    public function getStart() 
    {
        return $this->start;
    }

    public function setStart($start) 
    {
        $this->start = $start;
    }

    public function getAllDay() 
    {
        return $this->allDay;
    }

    public function setAllDay($allDay) 
    {
        $this->allDay = $allDay;
    }

    public function getLocation() 
    {
        return $this->location;
    }

    public function setLocation($location) 
    {
        $this->location = $location;
    }

    public function getDescription() 
    {
        return $this->description;
    }

    public function setDescription($description) 
    {
        $this->description = $description;
    }

    public function getTitle() 
    {
        return $this->title;
    }

    public function setTitle($title) 
    {
        $this->title = $title;
    }

    public function getId() 
    {
        return $this->id;
    }

    public function setId($id) 
    {
        $this->id = $id;
    }


}