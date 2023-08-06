function Bubble(){
    document.getElementById("Time_Worst").innerText="O(N^2)";
    document.getElementById("Time_Average").innerText="Θ(N^2)";
    document.getElementById("Time_Best").innerText="Ω(N)";

    document.getElementById("Space_Worst").innerText="O(1)";

    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        for(var j=0;j<array_size-i-1;j++)
        {
            div_update(divs[j],div_sizes[j],comparing);//Color update

            if(div_sizes[j]>div_sizes[j+1])
            {
                div_update(divs[j],div_sizes[j], incorrect);//Color update
                div_update(divs[j+1],div_sizes[j+1], incorrect);//Color update

                var temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;

                div_update(divs[j],div_sizes[j], incorrect);//Height update
                div_update(divs[j+1],div_sizes[j+1], incorrect);//Height update
            }
            div_update(divs[j],div_sizes[j], default_color);//Color updat
        }
        div_update(divs[j],div_sizes[j], correct);//Color update
    }
    div_update(divs[0],div_sizes[0], correct);//Color update

    enable_buttons();

}