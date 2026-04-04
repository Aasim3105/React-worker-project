import Card from './assets/card'
import { Bookmark, BookmarkCheck } from 'lucide-react'

import './App.css'
function App () {

const jobs = [
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeSc-26pBPN6KmKjMG0g2cDbZHWv4OS5Ocxg&s",
    name: "Google",
    time: "5 days ago",
    work: "UX Designer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$150k - $200k",
    location: "Bangalore, India"
  },
  {
    logo: "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
    name: "Amazon",
    time: "2 days ago",
    work: "Frontend Developer",
    tag1: "Full-time",
    tag2: "In Office",
    pay: "$120k - $180k",
    location: "Hyderabad, India"
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy3ZqxYhMdW3qa__685iJWJwGQGhV4VCivoQ&s",
    name: "Meta",
    time: "1 week ago",
    work: "Product Designer",
    tag1: "Part-time",
    tag2: "Remote",
    pay: "$100/hr",
    location: "Remote"
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrvwcAMtbDh5g19BPzv5RcG5rD1W47LBz1ew&s",
    name: "Netflix",
    time: "3 days ago",
    work: "UI Designer",
    tag1: "Full-time",
    tag2: "Flexible",
    pay: "$130k - $170k",
    location: "Mumbai, India"
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjqvprPWkD0AFap-C4otTt98AQSyRqS7mDNA&s",
    name: "Apple",
    time: "10 days ago",
    work: "iOS Developer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$160k - $210k",
    location: "Bangalore, India"
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEsx0cmENacsYu8Z3kwcrZJRqc8oFsWe2n3Q&s",
    name: "Microsoft",
    time: "6 days ago",
    work: "Backend Developer",
    tag1: "Full-time",
    tag2: "Hybrid",
    pay: "$140k - $190k",
    location: "Noida, India"
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTOC6IRnY4iyYoMlWUqXVuvKuRPgETEl3M3Q&s",
    name: "Airbnb",
    time: "4 days ago",
    work: "Graphic Designer",
    tag1: "Part-time",
    tag2: "Remote",
    pay: "$90/hr",
    location: "Remote"
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyofJBSm6dTe6O3ThGfnriU01tW2dVbfTG8Q&s",
    name: "Tesla",
    time: "8 days ago",
    work: "Software Engineer",
    tag1: "Full-time",
    tag2: "On-site",
    pay: "$150k - $220k",
    location: "Pune, India"
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK9HDsz9khs2XrgeC6S5Zsq9sAAvv60wBPpA&s",
    name: "Spotify",
    time: "12 days ago",
    work: "UX Researcher",
    tag1: "Contract",
    tag2: "Flexible",
    pay: "$110/hr",
    location: "Remote"
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTonVNsfzvIrKxFgcvMhXtw3Mh4NX9re2B7Vg&s",
    name: "Adobe",
    time: "7 days ago",
    work: "UI/UX Designer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$140k - $180k",
    location: "Delhi, India"
  }
];
console.log(jobs);


  return <div className="parent">
    {jobs.map(function(elem){
      return <Card location={elem.location} logo={elem.logo} name={elem.name} pay = {elem.pay} work={elem.work} time = {elem.time} tag1 = {elem.tag1} tag2 = {elem.tag2}/>
    })}

  </div>

}

export default App