(function() {var implementors = {};
implementors["bytes"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"bytes/struct.RingBuf.html\" title=\"struct bytes::RingBuf\">RingBuf</a>",synthetic:false,types:["bytes::buf::ring::RingBuf"]},{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"bytes/buf/trait.Buf.html\" title=\"trait bytes::buf::Buf\">Buf</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"bytes/struct.Take.html\" title=\"struct bytes::Take\">Take</a>&lt;T&gt;",synthetic:false,types:["bytes::buf::take::Take"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"bytes/struct.ByteBuf.html\" title=\"struct bytes::ByteBuf\">ByteBuf</a>",synthetic:false,types:["bytes::buf::byte::ByteBuf"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"bytes/struct.ROByteBuf.html\" title=\"struct bytes::ROByteBuf\">ROByteBuf</a>",synthetic:false,types:["bytes::buf::byte::ROByteBuf"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"bytes/struct.RopeBuf.html\" title=\"struct bytes::RopeBuf\">RopeBuf</a>",synthetic:false,types:["bytes::str::rope::RopeBuf"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;<a class=\"trait\" href=\"bytes/buf/trait.Buf.html\" title=\"trait bytes::buf::Buf\">Buf</a> + 'static&gt;",synthetic:false,types:["alloc::boxed::Box"]},];
implementors["mio"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"mio/tcp/struct.TcpStream.html\" title=\"struct mio::tcp::TcpStream\">TcpStream</a>",synthetic:false,types:["mio::net::tcp::TcpStream"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"mio/unix/struct.UnixStream.html\" title=\"struct mio::unix::UnixStream\">UnixStream</a>",synthetic:false,types:["mio::net::unix::UnixStream"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"mio/unix/struct.PipeReader.html\" title=\"struct mio::unix::PipeReader\">PipeReader</a>",synthetic:false,types:["mio::net::unix::PipeReader"]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for &amp;'a <a class=\"struct\" href=\"mio/unix/struct.PipeReader.html\" title=\"struct mio::unix::PipeReader\">PipeReader</a>",synthetic:false,types:["mio::net::unix::PipeReader"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"mio/struct.Io.html\" title=\"struct mio::Io\">Io</a>",synthetic:false,types:["mio::sys::unix::io::Io"]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for &amp;'a <a class=\"struct\" href=\"mio/struct.Io.html\" title=\"struct mio::Io\">Io</a>",synthetic:false,types:["mio::sys::unix::io::Io"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
