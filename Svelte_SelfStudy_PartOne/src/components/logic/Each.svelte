<script>
    let persons = [ 
        {name: 'Kristian', age: 24},
        {name: 'Erik', age: 22},
        {name: 'Mads', age: 27}
    ];
</script>

<p>-- Each logic --</p>
<ul>
    {#each persons as { name, age }, i}
    <li>
        <p>My name is {name}, and im {age} old.</p>
    </li>
    {/each}
</ul>