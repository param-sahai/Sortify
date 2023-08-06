function Insertion()
{
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText="O(N^2)";
    document.getElementById("Time_Average").innerText="Θ(N^2)";
    document.getElementById("Time_Best").innerText="Ω(N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(1)";

    c_delay=0;

    for(let j=0;j<array_size;j++)
    {
        div_update(divs[j],div_sizes[j],comparing);//Color update

        let key= div_sizes[j];
        let i=j-1;
        while(i>=0 && div_sizes[i]>key)
        {
            div_update(divs[i],div_sizes[i],incorrect);//Color update
            div_update(divs[i+1],div_sizes[i+1],incorrect);//Color update

            div_sizes[i+1]=div_sizes[i];

            div_update(divs[i],div_sizes[i],incorrect);//Height update
            div_update(divs[i+1],div_sizes[i+1],incorrect);//Height update
    
            div_update(divs[i],div_sizes[i],default_color);//Color update
            if(i==(j-1))
            {
                div_update(divs[i+1],div_sizes[i+1],comparing);//Color update
            }
            else
            {
                div_update(divs[i+1],div_sizes[i+1],default_color);//Color update
            }
            i-=1;
        }
        div_sizes[i+1]=key;

        for(let t=0;t<j;t++)
        {
            div_update(divs[t],div_sizes[t],correct);//Color update
        }
    }
    div_update(divs[array_size-1],div_sizes[array_size-1],correct);//Color update

    enable_buttons();
}