(function(){"use strict";var an="data:application/octet-stream;base64,aW1wb3J0IHsgQ29udGFpbmVyLCBGbGV4LCBTdGFjaywgVGV4dCB9IGZyb20gIkBtYW50aW5lL2NvcmUiOwppbXBvcnQgeyBEZWNvZGVyIH0gZnJvbSAiLi9EZWNvZGVyIjsKCmZ1bmN0aW9uIEFwcCgpIHsKICByZXR1cm4gKAogICAgPENvbnRhaW5lciBzdHJhdGVneT0iYmxvY2siIHNpemU9ezgwMH0gcD0iOCI+CiAgICAgIDxTdGFjayBnYXA9ezh9PgogICAgICAgIDxTdGFjayBnYXA9ezB9PgogICAgICAgICAgPEZsZXggYWxpZ249ImNlbnRlciIganVzdGlmeT0ic3BhY2UtYmV0d2VlbiI+CiAgICAgICAgICAgIDxUZXh0IHNpemU9InhsIiBmdz17NzAwfT4KICAgICAgICAgICAgICB3ZWItZGVlcC1jdy1kZWNvZGVyCiAgICAgICAgICAgIDwvVGV4dD4KICAgICAgICAgICAgPFRleHQgc2l6ZT0ieHMiIGM9ImRpbW1lZCI+CiAgICAgICAgICAgICAgdjAuMS4wCiAgICAgICAgICAgIDwvVGV4dD4KICAgICAgICAgIDwvRmxleD4KICAgICAgICA8L1N0YWNrPgogICAgICAgIDxEZWNvZGVyIC8+CiAgICAgICAgPEZsZXgganVzdGlmeT0icmlnaHQiPgogICAgICAgICAgPFRleHQgY29tcG9uZW50PSJhIiBjPSJkaW1tZWQiIGhyZWY9Imh0dHBzOi8vZ2l0aHViLmNvbS9lMDQvIj4KICAgICAgICAgICAgQ29weXJpZ2h0IMKpIDIwMjYgZTA0CiAgICAgICAgICA8L1RleHQ+CiAgICAgICAgPC9GbGV4PgogICAgICA8L1N0YWNrPgogICAgPC9Db250YWluZXI+CiAgKTsKfQoKZXhwb3J0IGRlZmF1bHQgQXBwOwo=",nn=""+new URL("Decoder-BsVZEppn.tsx",self.location.href).href,sn="data:application/octet-stream;base64,aW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAicmVhY3QiOwppbXBvcnQgeyBCb3ggfSBmcm9tICJAbWFudGluZS9jb3JlIjsKaW1wb3J0IHsgdXNlU3BlY3Ryb2dyYW1SZW5kZXJlciB9IGZyb20gIi4vaG9va3MvdXNlU3BlY3Ryb2dyYW1SZW5kZXJlciI7CmltcG9ydCB7IHVzZUNhbnZhc0ludGVyYWN0aW9uIH0gZnJvbSAiLi9ob29rcy91c2VDYW52YXNJbnRlcmFjdGlvbiI7CmltcG9ydCB7IGNhbGN1bGF0ZUJhbmRQb3NpdGlvbiB9IGZyb20gIi4vdXRpbHMvZnJlcXVlbmN5VXRpbHMiOwoKdHlwZSBTY29wZVByb3BzID0gewogIHN0cmVhbTogTWVkaWFTdHJlYW07CiAgc2V0RmlsdGVyRnJlcTogKGZyZXE6IG51bWJlciB8IG51bGwpID0+IHZvaWQ7CiAgZmlsdGVyRnJlcTogbnVtYmVyIHwgbnVsbDsKICBmaWx0ZXJXaWR0aDogbnVtYmVyOwogIGdhaW46IG51bWJlcjsKfTsKCmV4cG9ydCBjb25zdCBTY29wZSA9ICh7CiAgc3RyZWFtLAogIHNldEZpbHRlckZyZXEsCiAgZmlsdGVyRnJlcSwKICBmaWx0ZXJXaWR0aCwKICBnYWluLAp9OiBTY29wZVByb3BzKSA9PiB7CiAgY29uc3QgY2FudmFzUmVmID0gdXNlUmVmPEhUTUxDYW52YXNFbGVtZW50IHwgbnVsbD4obnVsbCk7CgogIHVzZVNwZWN0cm9ncmFtUmVuZGVyZXIoeyBzdHJlYW0sIGdhaW4sIGNhbnZhc1JlZiB9KTsKCiAgdXNlQ2FudmFzSW50ZXJhY3Rpb24oeyBjYW52YXNSZWYsIGZpbHRlckZyZXEsIHNldEZpbHRlckZyZXEsIGZpbHRlcldpZHRoIH0pOwoKICBjb25zdCB7IHRvcFBlcmNlbnQsIGhlaWdodFBlcmNlbnQgfSA9IGNhbGN1bGF0ZUJhbmRQb3NpdGlvbigKICAgIGZpbHRlckZyZXEsCiAgICBmaWx0ZXJXaWR0aAogICk7CgogIHJldHVybiAoCiAgICA8Qm94IHN0eWxlPXt7IHBvc2l0aW9uOiAicmVsYXRpdmUiLCB3aWR0aDogIjEwMCUiIH19PgogICAgICA8Qm94CiAgICAgICAgY29tcG9uZW50PSJjYW52YXMiCiAgICAgICAgcmVmPXtjYW52YXNSZWZ9CiAgICAgICAgc3R5bGU9e3sKICAgICAgICAgIGRpc3BsYXk6ICJibG9jayIsCiAgICAgICAgICBiYWNrZ3JvdW5kOiAidmFyKC0tbWFudGluZS1jb2xvci1kYXJrLTkpIiwKICAgICAgICAgIHdpZHRoOiAiMTAwJSIsCiAgICAgICAgICBoZWlnaHQ6ICIyNTZweCIsCiAgICAgICAgICBib3JkZXJSYWRpdXM6ICI0cHgiLAogICAgICAgICAgYm9yZGVyOiAiMXB4IHNvbGlkIHZhcigtLW1hbnRpbmUtY29sb3ItZGFyay00KSIsCiAgICAgICAgfX0KICAgICAgLz4KICAgICAgPEJveAogICAgICAgIHN0eWxlPXt7CiAgICAgICAgICBwb3NpdGlvbjogImFic29sdXRlIiwKICAgICAgICAgIGxlZnQ6IDAsCiAgICAgICAgICByaWdodDogMCwKICAgICAgICAgIHRvcDogYCR7dG9wUGVyY2VudH0lYCwKICAgICAgICAgIGhlaWdodDogYCR7aGVpZ2h0UGVyY2VudH0lYCwKICAgICAgICAgIGJvcmRlclRvcDogIjFweCBzb2xpZCB2YXIoLS1tYW50aW5lLWNvbG9yLXJlZC03KSIsCiAgICAgICAgICBib3JkZXJCb3R0b206ICIxcHggc29saWQgdmFyKC0tbWFudGluZS1jb2xvci1yZWQtNykiLAogICAgICAgICAgcG9pbnRlckV2ZW50czogIm5vbmUiLAogICAgICAgIH19CiAgICAgIC8+CiAgICA8L0JveD4KICApOwp9Owo=",on="data:video/mp2t;base64,ZXhwb3J0IGNvbnN0IEVOR0xJU0hfQ09ORklHID0gewogIE1PREVMX0ZJTEU6ICJtb2RlbC5vbm54IiwKICBWT0NBQlVMQVJZOiBbCiAgICAiW1VOS10iLAogICAgIi8iLAogICAgIjAiLAogICAgIjEiLAogICAgIjIiLAogICAgIjMiLAogICAgIjQiLAogICAgIjUiLAogICAgIjYiLAogICAgIjciLAogICAgIjgiLAogICAgIjkiLAogICAgIj8iLAogICAgIkEiLAogICAgIkIiLAogICAgIkMiLAogICAgIkQiLAogICAgIkUiLAogICAgIkYiLAogICAgIkciLAogICAgIkgiLAogICAgIkkiLAogICAgIkoiLAogICAgIksiLAogICAgIkwiLAogICAgIk0iLAogICAgIk4iLAogICAgIk8iLAogICAgIlAiLAogICAgIlEiLAogICAgIlIiLAogICAgIlMiLAogICAgIlQiLAogICAgIlUiLAogICAgIlYiLAogICAgIlciLAogICAgIlgiLAogICAgIlkiLAogICAgIloiLAogICAgIu6MsCIsCiAgICAi7oyxIiwKICAgICLujLIiLAogICAgIu6MsyIsCiAgICAi7oy0IiwKICAgICLujLUiLAogICAgIu6MtiIsCiAgICAiICIsCiAgXSwKICBBQkJSRVZJQVRJT046IHsKICAgICLujLAiOiAiQVIiLAogICAgIu6MsSI6ICJCVCIsCiAgICAi7oyyIjogIkhIIiwKICAgICLujLMiOiAiS04iLAogICAgIu6MtCI6ICJTSyIsCiAgICAi7oy1IjogIkJLIiwKICAgICLujLYiOiAiVVIiLAogIH0sCn07CgpleHBvcnQgY29uc3QgSkFQQU5FU0VfQ09ORklHID0gewogIE1PREVMX0ZJTEU6ICJtb2RlbF9qYS5vbm54IiwKICBWT0NBQlVMQVJZOiBbCiAgICAiW1VOS10iLAogICAgIiAiLAogICAgIu+8iSIsCiAgICAiMCIsCiAgICAiMSIsCiAgICAiMiIsCiAgICAiMyIsCiAgICAiNCIsCiAgICAiNSIsCiAgICAiNiIsCiAgICAiNyIsCiAgICAiOCIsCiAgICAiOSIsCiAgICAiPyIsCiAgICAi44CBIiwKICAgICLjgI0iLAogICAgIuOCmyIsCiAgICAi44KcIiwKICAgICLjgqIiLAogICAgIuOCpCIsCiAgICAi44KmIiwKICAgICLjgqgiLAogICAgIuOCqiIsCiAgICAi44KrIiwKICAgICLjgq0iLAogICAgIuOCryIsCiAgICAi44KxIiwKICAgICLjgrMiLAogICAgIuOCtSIsCiAgICAi44K3IiwKICAgICLjgrkiLAogICAgIuOCuyIsCiAgICAi44K9IiwKICAgICLjgr8iLAogICAgIuODgSIsCiAgICAi44OEIiwKICAgICLjg4YiLAogICAgIuODiCIsCiAgICAi44OKIiwKICAgICLjg4siLAogICAgIuODjCIsCiAgICAi44ONIiwKICAgICLjg44iLAogICAgIuODjyIsCiAgICAi44OSIiwKICAgICLjg5UiLAogICAgIuODmCIsCiAgICAi44ObIiwKICAgICLjg54iLAogICAgIuODnyIsCiAgICAi44OgIiwKICAgICLjg6EiLAogICAgIuODoiIsCiAgICAi44OkIiwKICAgICLjg6YiLAogICAgIuODqCIsCiAgICAi44OpIiwKICAgICLjg6oiLAogICAgIuODqyIsCiAgICAi44OsIiwKICAgICLjg60iLAogICAgIuODryIsCiAgICAi44OwIiwKICAgICLjg7EiLAogICAgIuODsiIsCiAgICAi44OzIiwKICAgICLjg7wiLAogICAgIuacrCIsCiAgICAi6KiCIiwKICAgICLvvIgiLAogICAgIiAiLAogIF0sCiAgQUJCUkVWSUFUSU9OOiB7CiAgICAi5pysIjogIu++ju++miIsCiAgICAi6KiCIjogIu++l+++gCIsCiAgfSwKfTsKCmV4cG9ydCBjb25zdCBOdW1Ub0NoYXIgPSBPYmplY3QuZnJvbUVudHJpZXMoCiAgRU5HTElTSF9DT05GSUcuVk9DQUJVTEFSWS5tYXAoKGNoYXIsIGkpID0+IFtpLCBjaGFyXSksCik7CgpleHBvcnQgY29uc3QgRkZUX0xFTkdUSCA9IDI1NjsKZXhwb3J0IGNvbnN0IEhPUF9MRU5HVEggPSA2NDsKZXhwb3J0IGNvbnN0IFNBTVBMRV9SQVRFID0gMzIwMDsKZXhwb3J0IGNvbnN0IEJVRkZFUl9EVVJBVElPTl9TID0gMTI7CmV4cG9ydCBjb25zdCBJTkZFUkVOQ0VfSU5URVJWQUxfUyA9IDAuMjU7CmV4cG9ydCBjb25zdCBCVUZGRVJfU0FNUExFUyA9IEJVRkZFUl9EVVJBVElPTl9TICogU0FNUExFX1JBVEU7CgpleHBvcnQgY29uc3QgTUlOX0ZSRVFfSFogPSAxMDA7CmV4cG9ydCBjb25zdCBNQVhfRlJFUV9IWiA9IDE1MDA7CgpleHBvcnQgY29uc3QgREVDT0RBQkxFX01JTl9GUkVRX0haID0gNDAwOwpleHBvcnQgY29uc3QgREVDT0RBQkxFX01BWF9GUkVRX0haID0gMTIwMDsK",un=""+new URL("global-DiXlIB9t.css",self.location.href).href,ln="data:application/octet-stream;base64,aW1wb3J0IHsgU3RyaWN0TW9kZSB9IGZyb20gInJlYWN0IjsKaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gInJlYWN0LWRvbS9jbGllbnQiOwppbXBvcnQgQXBwIGZyb20gIi4vQXBwLnRzeCI7CmltcG9ydCAiQG1hbnRpbmUvY29yZS9zdHlsZXMuY3NzIjsKaW1wb3J0ICIuL2dsb2JhbC5jc3MiOwppbXBvcnQgeyBNYW50aW5lUHJvdmlkZXIgfSBmcm9tICJAbWFudGluZS9jb3JlIjsKCmNyZWF0ZVJvb3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoInJvb3QiKSEpLnJlbmRlcigKICA8U3RyaWN0TW9kZT4KICAgIDxNYW50aW5lUHJvdmlkZXIgZGVmYXVsdENvbG9yU2NoZW1lPSJkYXJrIj4KICAgICAgPEFwcCAvPgogICAgPC9NYW50aW5lUHJvdmlkZXI+CiAgPC9TdHJpY3RNb2RlPgopOwo=",dn=""+new URL("model-DGBqNjjL.onnx",self.location.href).href,pn=""+new URL("model_ja-Dh7kaPzG.onnx",self.location.href).href,cn="data:video/mp2t;base64,aW1wb3J0IHR5cGUgKiBhcyBfT3J0IGZyb20gIm9ubnhydW50aW1lLXdlYiI7CgpkZWNsYXJlIGdsb2JhbCB7CiAgY29uc3Qgb3J0OiB0eXBlb2YgX09ydDsKfQoKZXhwb3J0IHt9Owo=",fn="data:video/mp2t;base64,ZXhwb3J0IGNsYXNzIEZGVCB7CiAgcHVibGljIHJlYWRvbmx5IGZmdFNpemU6IG51bWJlcjsKICBwcml2YXRlIHJldmVyc2VUYWJsZTogVWludDMyQXJyYXk7CiAgcHJpdmF0ZSBzaW5UYWJsZTogRmxvYXQzMkFycmF5OwogIHByaXZhdGUgY29zVGFibGU6IEZsb2F0MzJBcnJheTsKCiAgY29uc3RydWN0b3IoZmZ0U2l6ZTogbnVtYmVyKSB7CiAgICBpZiAoKGZmdFNpemUgJiAoZmZ0U2l6ZSAtIDEpKSAhPT0gMCkgewogICAgICB0aHJvdyBuZXcgRXJyb3IoIkZGVCBzaXplIG11c3QgYmUgYSBwb3dlciBvZiAyLiIpOwogICAgfQogICAgdGhpcy5mZnRTaXplID0gZmZ0U2l6ZTsKCiAgICB0aGlzLnJldmVyc2VUYWJsZSA9IG5ldyBVaW50MzJBcnJheShmZnRTaXplKTsKICAgIHRoaXMuc2luVGFibGUgPSBuZXcgRmxvYXQzMkFycmF5KGZmdFNpemUpOwogICAgdGhpcy5jb3NUYWJsZSA9IG5ldyBGbG9hdDMyQXJyYXkoZmZ0U2l6ZSk7CgogICAgbGV0IGxpbWl0ID0gMTsKICAgIGxldCBiaXQgPSBmZnRTaXplID4+IDE7CiAgICB3aGlsZSAobGltaXQgPCBmZnRTaXplKSB7CiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGltaXQ7IGkrKykgewogICAgICAgIHRoaXMucmV2ZXJzZVRhYmxlW2kgKyBsaW1pdF0gPSB0aGlzLnJldmVyc2VUYWJsZVtpXSArIGJpdDsKICAgICAgfQogICAgICBsaW1pdCA9IGxpbWl0IDw8IDE7CiAgICAgIGJpdCA9IGJpdCA+PiAxOwogICAgfQoKICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmZ0U2l6ZTsgaSsrKSB7CiAgICAgIGNvbnN0IGFuZ2xlID0gKC0yICogTWF0aC5QSSAqIGkpIC8gZmZ0U2l6ZTsKICAgICAgdGhpcy5zaW5UYWJsZVtpXSA9IE1hdGguc2luKGFuZ2xlKTsKICAgICAgdGhpcy5jb3NUYWJsZVtpXSA9IE1hdGguY29zKGFuZ2xlKTsKICAgIH0KICB9CgogIHB1YmxpYyB0cmFuc2Zvcm0oY29tcGxleEFycmF5OiBGbG9hdDMyQXJyYXkpOiB2b2lkIHsKICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5mZnRTaXplOyBpKyspIHsKICAgICAgY29uc3QgcmV2ZXJzZWRJbmRleCA9IHRoaXMucmV2ZXJzZVRhYmxlW2ldOwogICAgICBpZiAoaSA8IHJldmVyc2VkSW5kZXgpIHsKICAgICAgICBbY29tcGxleEFycmF5W2kgKiAyXSwgY29tcGxleEFycmF5W3JldmVyc2VkSW5kZXggKiAyXV0gPSBbCiAgICAgICAgICBjb21wbGV4QXJyYXlbcmV2ZXJzZWRJbmRleCAqIDJdLAogICAgICAgICAgY29tcGxleEFycmF5W2kgKiAyXSwKICAgICAgICBdOwogICAgICAgIFtjb21wbGV4QXJyYXlbaSAqIDIgKyAxXSwgY29tcGxleEFycmF5W3JldmVyc2VkSW5kZXggKiAyICsgMV1dID0gWwogICAgICAgICAgY29tcGxleEFycmF5W3JldmVyc2VkSW5kZXggKiAyICsgMV0sCiAgICAgICAgICBjb21wbGV4QXJyYXlbaSAqIDIgKyAxXSwKICAgICAgICBdOwogICAgICB9CiAgICB9CgogICAgZm9yIChsZXQgaGFsZlNpemUgPSAxOyBoYWxmU2l6ZSA8IHRoaXMuZmZ0U2l6ZTsgaGFsZlNpemUgKj0gMikgewogICAgICBjb25zdCBzdGVwID0gMiAqIGhhbGZTaXplOwogICAgICBjb25zdCBhbmdsZVN0ZXAgPSB0aGlzLmZmdFNpemUgLyBzdGVwOwogICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZmZ0U2l6ZTsgaSArPSBzdGVwKSB7CiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBoYWxmU2l6ZTsgaisrKSB7CiAgICAgICAgICBjb25zdCBhbmdsZUluZGV4ID0gaiAqIGFuZ2xlU3RlcDsKICAgICAgICAgIGNvbnN0IHdSZWFsID0gdGhpcy5jb3NUYWJsZVthbmdsZUluZGV4XTsKICAgICAgICAgIGNvbnN0IHdJbWFnID0gdGhpcy5zaW5UYWJsZVthbmdsZUluZGV4XTsKCiAgICAgICAgICBjb25zdCBpX2ogPSAoaSArIGopICogMjsKICAgICAgICAgIGNvbnN0IGlfal9oYWxmID0gKGkgKyBqICsgaGFsZlNpemUpICogMjsKCiAgICAgICAgICBjb25zdCB0ciA9CiAgICAgICAgICAgIHdSZWFsICogY29tcGxleEFycmF5W2lfal9oYWxmXSAtIHdJbWFnICogY29tcGxleEFycmF5W2lfal9oYWxmICsgMV07CiAgICAgICAgICBjb25zdCB0aSA9CiAgICAgICAgICAgIHdSZWFsICogY29tcGxleEFycmF5W2lfal9oYWxmICsgMV0gKyB3SW1hZyAqIGNvbXBsZXhBcnJheVtpX2pfaGFsZl07CgogICAgICAgICAgY29uc3QgdXIgPSBjb21wbGV4QXJyYXlbaV9qXTsKICAgICAgICAgIGNvbnN0IHVpID0gY29tcGxleEFycmF5W2lfaiArIDFdOwoKICAgICAgICAgIGNvbXBsZXhBcnJheVtpX2pdID0gdXIgKyB0cjsKICAgICAgICAgIGNvbXBsZXhBcnJheVtpX2ogKyAxXSA9IHVpICsgdGk7CiAgICAgICAgICBjb21wbGV4QXJyYXlbaV9qX2hhbGZdID0gdXIgLSB0cjsKICAgICAgICAgIGNvbXBsZXhBcnJheVtpX2pfaGFsZiArIDFdID0gdWkgLSB0aTsKICAgICAgICB9CiAgICAgIH0KICAgIH0KICB9Cn0KCmV4cG9ydCBjbGFzcyBTVEZUIHsKICBwdWJsaWMgcmVhZG9ubHkgZmZ0U2l6ZTogbnVtYmVyOwogIHB1YmxpYyByZWFkb25seSBob3BTaXplOiBudW1iZXI7CiAgcHJpdmF0ZSBmZnQ6IEZGVDsKICBwcml2YXRlIHdpbmRvdzogRmxvYXQzMkFycmF5OwoKICBjb25zdHJ1Y3RvcihmZnRTaXplOiBudW1iZXIsIGhvcFNpemU6IG51bWJlcikgewogICAgaWYgKGZmdFNpemUgPD0gMCkgewogICAgICB0aHJvdyBuZXcgRXJyb3IoIkZGVCBzaXplIG11c3QgYmUgcG9zaXRpdmUuIik7CiAgICB9CiAgICBpZiAoaG9wU2l6ZSA8PSAwKSB7CiAgICAgIHRocm93IG5ldyBFcnJvcigiSG9wIHNpemUgbXVzdCBiZSBwb3NpdGl2ZS4iKTsKICAgIH0KCiAgICB0aGlzLmZmdFNpemUgPSBmZnRTaXplOwogICAgdGhpcy5ob3BTaXplID0gaG9wU2l6ZTsKICAgIHRoaXMuZmZ0ID0gbmV3IEZGVChmZnRTaXplKTsKICAgIHRoaXMud2luZG93ID0gdGhpcy5nZW5lcmF0ZUhhbm5pbmdXaW5kb3coKTsKICB9CgogIHByaXZhdGUgZ2VuZXJhdGVIYW5uaW5nV2luZG93KCk6IEZsb2F0MzJBcnJheSB7CiAgICBjb25zdCB3aW5kb3cgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuZmZ0U2l6ZSk7CiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZmZ0U2l6ZTsgaSsrKSB7CiAgICAgIHdpbmRvd1tpXSA9IDAuNSAqICgxIC0gTWF0aC5jb3MoKDIgKiBNYXRoLlBJICogaSkgLyAodGhpcy5mZnRTaXplIC0gMSkpKTsKICAgIH0KICAgIHJldHVybiB3aW5kb3c7CiAgfQoKICBwdWJsaWMgYW5hbHl6ZShzaWduYWw6IEZsb2F0MzJBcnJheSk6IEZsb2F0MzJBcnJheVtdIHsKICAgIGNvbnN0IHNwZWN0cm9ncmFtOiBGbG9hdDMyQXJyYXlbXSA9IFtdOwogICAgY29uc3QgZnJhbWUgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuZmZ0U2l6ZSk7CiAgICBjb25zdCBjb21wbGV4RnJhbWUgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuZmZ0U2l6ZSAqIDIpOwoKICAgIGZvciAobGV0IGkgPSAwOyBpICsgdGhpcy5mZnRTaXplIDw9IHNpZ25hbC5sZW5ndGg7IGkgKz0gdGhpcy5ob3BTaXplKSB7CiAgICAgIGNvbnN0IHNpZ25hbFNsaWNlID0gc2lnbmFsLnN1YmFycmF5KGksIGkgKyB0aGlzLmZmdFNpemUpOwogICAgICBmcmFtZS5zZXQoc2lnbmFsU2xpY2UpOwoKICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmZmdFNpemU7IGorKykgewogICAgICAgIGZyYW1lW2pdICo9IHRoaXMud2luZG93W2pdOwogICAgICB9CgogICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuZmZ0U2l6ZTsgaisrKSB7CiAgICAgICAgY29tcGxleEZyYW1lW2ogKiAyXSA9IGZyYW1lW2pdOwogICAgICAgIGNvbXBsZXhGcmFtZVtqICogMiArIDFdID0gMDsKICAgICAgfQoKICAgICAgdGhpcy5mZnQudHJhbnNmb3JtKGNvbXBsZXhGcmFtZSk7CgogICAgICBzcGVjdHJvZ3JhbS5wdXNoKGNvbXBsZXhGcmFtZS5zbGljZSgpKTsKICAgIH0KCiAgICByZXR1cm4gc3BlY3Ryb2dyYW07CiAgfQp9Cg==",hn="data:video/mp2t;base64,aW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAicmVhY3QiOwppbXBvcnQgeyBJTkZFUkVOQ0VfSU5URVJWQUxfUyB9IGZyb20gIi4vY29uc3QiOwppbXBvcnQgeyBsb2FkTW9kZWwsIHJ1bkluZmVyZW5jZSB9IGZyb20gIi4vdXRpbHMvaW5mZXJlbmNlIjsKaW1wb3J0IHsgdXNlQXVkaW9Qcm9jZXNzaW5nIH0gZnJvbSAiLi9ob29rcy91c2VBdWRpb1Byb2Nlc3NpbmciOwppbXBvcnQgdHlwZSB7IFRleHRTZWdtZW50IH0gZnJvbSAiLi91dGlscy90ZXh0RGVjb2RlciI7Cgp0eXBlIFVzZURlY29kZVBhcmFtcyA9IHsKICBmaWx0ZXJGcmVxOiBudW1iZXIgfCBudWxsOwogIGZpbHRlcldpZHRoOiBudW1iZXI7CiAgZ2FpbjogbnVtYmVyOwogIHN0cmVhbTogTWVkaWFTdHJlYW0gfCBudWxsOwogIGxhbmd1YWdlOiAiRU4iIHwgIkVOL0pBIjsKfTsKCi8qKgogKiBDV+ODh+OCs+ODvOODieapn+iDveOCkuaPkOS+m+OBmeOCi+OCq+OCueOCv+ODoOODleODg+OCrwogKi8KZXhwb3J0IGNvbnN0IHVzZURlY29kZSA9ICh7CiAgZmlsdGVyRnJlcSwKICBmaWx0ZXJXaWR0aCwKICBnYWluLAogIHN0cmVhbSwKICBsYW5ndWFnZSwKfTogVXNlRGVjb2RlUGFyYW1zKSA9PiB7CiAgY29uc3QgW2xvYWRlZCwgc2V0TG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTsKICBjb25zdCBbbG9hZGVkSmEsIHNldExvYWRlZEphXSA9IHVzZVN0YXRlKGZhbHNlKTsKICBjb25zdCBbY3VycmVudFNlZ21lbnRzLCBzZXRDdXJyZW50U2VnbWVudHNdID0gdXNlU3RhdGU8VGV4dFNlZ21lbnRbXT4oW10pOwogIGNvbnN0IFtjdXJyZW50U2VnbWVudHNKYSwgc2V0Q3VycmVudFNlZ21lbnRzSmFdID0gdXNlU3RhdGU8VGV4dFNlZ21lbnRbXT4oW10pOwogIGNvbnN0IFtpc0RlY29kaW5nLCBzZXRJc0RlY29kaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTsKCiAgY29uc3QgZmlsdGVyUGFyYW1zUmVmID0gdXNlUmVmKHsgZmlsdGVyRnJlcSwgZmlsdGVyV2lkdGggfSk7CiAgY29uc3QgaW5mZXJlbmNlSW50ZXJ2YWxJZCA9IHVzZVJlZjxOb2RlSlMuVGltZW91dCB8IG51bGw+KG51bGwpOwoKICBjb25zdCBhdWRpb0J1ZmZlclJlZiA9IHVzZUF1ZGlvUHJvY2Vzc2luZyhzdHJlYW0sIGdhaW4pOwoKICB1c2VFZmZlY3QoKCkgPT4gewogICAgKGFzeW5jICgpID0+IHsKICAgICAgYXdhaXQgbG9hZE1vZGVsKCJlbiIpOwogICAgICBzZXRMb2FkZWQodHJ1ZSk7CiAgICB9KSgpOwogIH0sIFtdKTsKCiAgdXNlRWZmZWN0KCgpID0+IHsKICAgIGlmIChsYW5ndWFnZSA9PT0gIkVOL0pBIiAmJiAhbG9hZGVkSmEpIHsKICAgICAgKGFzeW5jICgpID0+IHsKICAgICAgICBhd2FpdCBsb2FkTW9kZWwoImphIik7CiAgICAgICAgc2V0TG9hZGVkSmEodHJ1ZSk7CiAgICAgIH0pKCk7CiAgICB9CiAgfSwgW2xhbmd1YWdlLCBsb2FkZWRKYV0pOwoKICAvLyDjg5XjgqPjg6vjgr/jg7zjg5Hjg6njg6Hjg7zjgr/jga7mm7TmlrAKICB1c2VFZmZlY3QoKCkgPT4gewogICAgZmlsdGVyUGFyYW1zUmVmLmN1cnJlbnQgPSB7IGZpbHRlckZyZXEsIGZpbHRlcldpZHRoIH07CiAgfSwgW2ZpbHRlckZyZXEsIGZpbHRlcldpZHRoXSk7CgogIC8vIOODh+OCs+ODvOODieWHpueQhgogIHVzZUVmZmVjdCgoKSA9PiB7CiAgICBpZiAoIXN0cmVhbSB8fCAhbG9hZGVkKSB7CiAgICAgIHJldHVybjsKICAgIH0KCiAgICBpbmZlcmVuY2VJbnRlcnZhbElkLmN1cnJlbnQgPSBzZXRJbnRlcnZhbChhc3luYyAoKSA9PiB7CiAgICAgIGNvbnN0IHsgZmlsdGVyRnJlcSwgZmlsdGVyV2lkdGggfSA9IGZpbHRlclBhcmFtc1JlZi5jdXJyZW50OwogICAgICAKICAgICAgY29uc3Qgc2VnbWVudHNFbiA9IGF3YWl0IHJ1bkluZmVyZW5jZSgKICAgICAgICBhdWRpb0J1ZmZlclJlZi5jdXJyZW50LAogICAgICAgIGZpbHRlckZyZXEsCiAgICAgICAgZmlsdGVyV2lkdGgsCiAgICAgICAgImVuIgogICAgICApOwogICAgICBzZXRDdXJyZW50U2VnbWVudHMoc2VnbWVudHNFbik7CiAgICAgIAogICAgICBpZiAobGFuZ3VhZ2UgPT09ICJFTi9KQSIgJiYgbG9hZGVkSmEpIHsKICAgICAgICBjb25zdCBzZWdtZW50c0phID0gYXdhaXQgcnVuSW5mZXJlbmNlKAogICAgICAgICAgYXVkaW9CdWZmZXJSZWYuY3VycmVudCwKICAgICAgICAgIGZpbHRlckZyZXEsCiAgICAgICAgICBmaWx0ZXJXaWR0aCwKICAgICAgICAgICJqYSIKICAgICAgICApOwogICAgICAgIHNldEN1cnJlbnRTZWdtZW50c0phKHNlZ21lbnRzSmEpOwogICAgICB9CiAgICB9LCBJTkZFUkVOQ0VfSU5URVJWQUxfUyAqIDEwMDApOwoKICAgIHNldElzRGVjb2RpbmcodHJ1ZSk7CgogICAgcmV0dXJuICgpID0+IHsKICAgICAgc2V0SXNEZWNvZGluZyhmYWxzZSk7CiAgICAgIGlmIChpbmZlcmVuY2VJbnRlcnZhbElkLmN1cnJlbnQpIHsKICAgICAgICBjbGVhckludGVydmFsKGluZmVyZW5jZUludGVydmFsSWQuY3VycmVudCk7CiAgICAgIH0KICAgIH07CiAgfSwgW3N0cmVhbSwgbG9hZGVkLCBsb2FkZWRKYSwgbGFuZ3VhZ2UsIGF1ZGlvQnVmZmVyUmVmXSk7CgogIHJldHVybiB7IGxvYWRlZCwgbG9hZGVkSmEsIGN1cnJlbnRTZWdtZW50cywgY3VycmVudFNlZ21lbnRzSmEsIGlzRGVjb2RpbmcgfTsKfTsK",mn="data:video/mp2t;base64,Ly8vIDxyZWZlcmVuY2UgdHlwZXM9InZpdGUvY2xpZW50IiAvPgo=";/*!
 * ONNX Runtime Web v1.22.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var Lr=Object.defineProperty,qf=Object.getOwnPropertyDescriptor,Kf=Object.getOwnPropertyNames,jf=Object.prototype.hasOwnProperty,Xf=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),M=(e,t)=>()=>(e&&(t=e(e=0)),t),kt=(e,t)=>{for(var r in t)Lr(e,r,{get:t[r],enumerable:!0})},Jf=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Kf(t))!jf.call(e,a)&&a!==r&&Lr(e,a,{get:()=>t[a],enumerable:!(i=qf(t,a))||i.enumerable});return e},Nt=e=>Jf(Lr({},"__esModule",{value:!0}),e),Dt,it,St,gn,bn,yn=M(()=>{Dt=new Map,it=[],St=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let i=Dt.get(e);if(i===void 0)Dt.set(e,{backend:t,priority:r});else{if(i.priority>r)return;if(i.priority===r&&i.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let a=it.indexOf(e);a!==-1&&it.splice(a,1);for(let n=0;n<it.length;n++)if(Dt.get(it[n]).priority<=r){it.splice(n,0,e);return}it.push(e)}return}throw new TypeError("not a valid backend")},gn=async e=>{let t=Dt.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(i){return r||(t.error=`${i}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},bn=async e=>{let t=e.executionProviders||[],r=t.map(l=>typeof l=="string"?l:l.name),i=r.length===0?it:r,a,n=[],s=new Set;for(let l of i){let d=await gn(l);typeof d=="string"?n.push({name:l,err:d}):(a||(a=d),a===d&&s.add(l))}if(!a)throw new Error(`no available backend found. ERR: ${n.map(l=>`[${l.name}] ${l.err}`).join(", ")}`);for(let{name:l,err:d}of n)r.includes(l)&&console.warn(`removing requested execution provider "${l}" from session options because it is not available: ${d}`);let u=t.filter(l=>s.has(typeof l=="string"?l:l.name));return[a,new Proxy(e,{get:(l,d)=>d==="executionProviders"?u:Reflect.get(l,d)})]}}),Yf=M(()=>{yn()}),_n,Qf=M(()=>{_n="1.22.0"}),Zr,Re,wn=M(()=>{Qf(),Zr="warning",Re={wasm:{},webgl:{},webgpu:{},versions:{common:_n},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Zr=e}},get logLevel(){return Zr}},Object.defineProperty(Re,"logLevel",{enumerable:!0})}),ge,eh=M(()=>{wn(),ge=Re}),$n,vn,th=M(()=>{$n=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let i=r.getContext("2d");if(i!=null){let a,n;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],n=e.dims[3]):(a=e.dims[3],n=e.dims[2]);let s=t?.format!==void 0?t.format:"RGB",u=t?.norm,l,d;u===void 0||u.mean===void 0?l=[255,255,255,255]:typeof u.mean=="number"?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],0],u.mean[3]!==void 0&&(l[3]=u.mean[3])),u===void 0||u.bias===void 0?d=[0,0,0,0]:typeof u.bias=="number"?d=[u.bias,u.bias,u.bias,u.bias]:(d=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(d[3]=u.bias[3]));let c=n*a,f=0,m=c,g=c*2,b=-1;s==="RGBA"?(f=0,m=c,g=c*2,b=c*3):s==="RGB"?(f=0,m=c,g=c*2):s==="RBG"&&(f=0,g=c,m=c*2);for(let _=0;_<n;_++)for(let x=0;x<a;x++){let v=(e.data[f++]-d[0])*l[0],w=(e.data[m++]-d[1])*l[1],C=(e.data[g++]-d[2])*l[2],I=b===-1?255:(e.data[b++]-d[3])*l[3];i.fillStyle="rgba("+v+","+w+","+C+","+I+")",i.fillRect(x,_,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},vn=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),i;if(r!=null){let a,n,s;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],n=e.dims[1],s=e.dims[3]):(a=e.dims[3],n=e.dims[2],s=e.dims[1]);let u=t!==void 0&&t.format!==void 0?t.format:"RGB",l=t?.norm,d,c;l===void 0||l.mean===void 0?d=[255,255,255,255]:typeof l.mean=="number"?d=[l.mean,l.mean,l.mean,l.mean]:(d=[l.mean[0],l.mean[1],l.mean[2],255],l.mean[3]!==void 0&&(d[3]=l.mean[3])),l===void 0||l.bias===void 0?c=[0,0,0,0]:typeof l.bias=="number"?c=[l.bias,l.bias,l.bias,l.bias]:(c=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(c[3]=l.bias[3]));let f=n*a;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let m=4,g=0,b=1,_=2,x=3,v=0,w=f,C=f*2,I=-1;u==="RGBA"?(v=0,w=f,C=f*2,I=f*3):u==="RGB"?(v=0,w=f,C=f*2):u==="RBG"&&(v=0,C=f,w=f*2),i=r.createImageData(a,n);for(let A=0;A<n*a;g+=m,b+=m,_+=m,x+=m,A++)i.data[g]=(e.data[v++]-c[0])*d[0],i.data[b]=(e.data[w++]-c[1])*d[1],i.data[_]=(e.data[C++]-c[2])*d[2],i.data[x]=I===-1?255:(e.data[I++]-c[3])*d[3]}else throw new Error("Can not access image data");return i}}),nr,In,xn,Cn,An,kn,rh=M(()=>{Fr(),nr=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:i}=t,a=t.norm??{mean:255,bias:0},n,s;typeof a.mean=="number"?n=[a.mean,a.mean,a.mean,a.mean]:n=[a.mean[0],a.mean[1],a.mean[2],a.mean[3]??255],typeof a.bias=="number"?s=[a.bias,a.bias,a.bias,a.bias]:s=[a.bias[0],a.bias[1],a.bias[2],a.bias[3]??0];let u=t.format!==void 0?t.format:"RGBA",l=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",d=r*i,c=l==="RGBA"?new Float32Array(d*4):new Float32Array(d*3),f=4,m=0,g=1,b=2,_=3,x=0,v=d,w=d*2,C=-1;u==="RGB"&&(f=3,m=0,g=1,b=2,_=-1),l==="RGBA"?C=d*3:l==="RBG"?(x=0,w=d,v=d*2):l==="BGR"&&(w=0,v=d,x=d*2);for(let I=0;I<d;I++,m+=f,b+=f,g+=f,_+=f)c[x++]=(e[m]+s[0])/n[0],c[v++]=(e[g]+s[1])/n[1],c[w++]=(e[b]+s[2])/n[2],C!==-1&&_!==-1&&(c[C++]=(e[_]+s[3])/n[3]);return l==="RGBA"?new ze("float32",c,[1,4,r,i]):new ze("float32",c,[1,3,r,i])},In=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,i=typeof ImageData<"u"&&e instanceof ImageData,a=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,n=typeof e=="string",s,u=t??{},l=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},d=c=>typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||c instanceof OffscreenCanvas?c.getContext("2d"):null;if(r){let c=l();c.width=e.width,c.height=e.height;let f=d(c);if(f!=null){let m=e.height,g=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(m=t.resizedHeight,g=t.resizedWidth),t!==void 0){if(u=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");u.tensorFormat="RGBA",u.height=m,u.width=g}else u.tensorFormat="RGBA",u.height=m,u.width=g;f.drawImage(e,0,0),s=f.getImageData(0,0,g,m).data}else throw new Error("Can not access image data")}else if(i){let c,f;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(c=t.resizedHeight,f=t.resizedWidth):(c=e.height,f=e.width),t!==void 0&&(u=t),u.format="RGBA",u.height=c,u.width=f,t!==void 0){let m=l();m.width=f,m.height=c;let g=d(m);if(g!=null)g.putImageData(e,0,0),s=g.getImageData(0,0,f,c).data;else throw new Error("Can not access image data")}else s=e.data}else if(a){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let c=l();c.width=e.width,c.height=e.height;let f=d(c);if(f!=null){let m=e.height,g=e.width;return f.drawImage(e,0,0,g,m),s=f.getImageData(0,0,g,m).data,u.height=m,u.width=g,nr(s,u)}else throw new Error("Can not access image data")}else{if(n)return new Promise((c,f)=>{let m=l(),g=d(m);if(!e||!g)return f();let b=new Image;b.crossOrigin="Anonymous",b.src=e,b.onload=()=>{m.width=b.width,m.height=b.height,g.drawImage(b,0,0,m.width,m.height);let _=g.getImageData(0,0,m.width,m.height);u.height=m.height,u.width=m.width,c(nr(_.data,u))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return nr(s,u);throw new Error("Input data provided is not supported - aborted tensor creation")},xn=(e,t)=>{let{width:r,height:i,download:a,dispose:n}=t,s=[1,i,r,4];return new ze({location:"texture",type:"float32",texture:e,dims:s,download:a,dispose:n})},Cn=(e,t)=>{let{dataType:r,dims:i,download:a,dispose:n}=t;return new ze({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:i,download:a,dispose:n})},An=(e,t)=>{let{dataType:r,dims:i,download:a,dispose:n}=t;return new ze({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:i,download:a,dispose:n})},kn=(e,t,r)=>new ze({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),ht,Wt,Hr,Sn,ih=M(()=>{ht=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Wt=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Hr=!1,Sn=()=>{if(!Hr){Hr=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,i=typeof r<"u"&&r.from;e&&(ht.set("int64",BigInt64Array),Wt.set(BigInt64Array,"int64")),t&&(ht.set("uint64",BigUint64Array),Wt.set(BigUint64Array,"uint64")),i?(ht.set("float16",r),Wt.set(r,"float16")):ht.set("float16",Uint16Array)}}}),Tn,En,ah=M(()=>{Fr(),Tn=e=>{let t=1;for(let r=0;r<e.length;r++){let i=e[r];if(typeof i!="number"||!Number.isSafeInteger(i))throw new TypeError(`dims[${r}] must be an integer, got: ${i}`);if(i<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${i}`);t*=i}return t},En=(e,t)=>{switch(e.location){case"cpu":return new ze(e.type,e.data,t);case"cpu-pinned":return new ze({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new ze({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new ze({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new ze({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),ze,Fr=M(()=>{th(),rh(),ih(),ah(),ze=class{constructor(e,t,r){Sn();let i,a;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,i=e.type,a=e.dims,e.location){case"cpu-pinned":{let s=ht.get(i);if(!s)throw new TypeError(`unsupported type "${i}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(i!=="float32")throw new TypeError(`unsupported type "${i}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint64"&&i!=="int8"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,u;if(typeof e=="string")if(i=e,u=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let l=ht.get(e);if(l===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&l===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${l.name} as data.`);e==="uint64"||e==="int64"?s=l.from(t,BigInt):s=l.from(t)}else if(t instanceof l)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&l!==Uint16Array)s=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${i} tensor's data must be type of ${l}`)}else if(u=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let l=typeof e[0];if(l==="string")i="string",s=e;else if(l==="boolean")i="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${l}.`)}else if(e instanceof Uint8ClampedArray)i="uint8",s=Uint8Array.from(e);else{let l=Wt.get(e.constructor);if(l===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);i=l,s=e}if(u===void 0)u=[s.length];else if(!Array.isArray(u))throw new TypeError("A tensor's dims must be a number array");a=u,this.cpuData=s,this.dataLocation="cpu"}let n=Tn(a);if(this.cpuData&&n!==this.cpuData.length&&!((i==="uint4"||i==="int4")&&Math.ceil(n/2)===this.cpuData.length))throw new Error(`Tensor's size(${n}) does not match data length(${this.cpuData.length}).`);this.type=i,this.dims=a,this.size=n}static async fromImage(e,t){return In(e,t)}static fromTexture(e,t){return xn(e,t)}static fromGpuBuffer(e,t){return Cn(e,t)}static fromMLTensor(e,t){return An(e,t)}static fromPinnedBuffer(e,t,r){return kn(e,t,r)}toDataURL(e){return $n(this,e)}toImageData(e){return vn(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return En(this,e)}}}),Me,zn=M(()=>{Fr(),Me=ze}),sr,qr,qe,Ve,Bn=M(()=>{wn(),sr=(e,t)=>{(typeof Re.trace>"u"?!Re.wasm.trace:!Re.trace)||console.timeStamp(`${e}::ORT::${t}`)},qr=(e,t)=>{let r=new Error().stack?.split(/\r\n|\r|\n/g)||[],i=!1;for(let a=0;a<r.length;a++){if(i&&!r[a].includes("TRACE_FUNC")){let n=`FUNC_${e}::${r[a].trim().split(" ")[1]}`;t&&(n+=`::${t}`),sr("CPU",n);return}r[a].includes("TRACE_FUNC")&&(i=!0)}},qe=e=>{(typeof Re.trace>"u"?!Re.wasm.trace:!Re.trace)||qr("BEGIN",e)},Ve=e=>{(typeof Re.trace>"u"?!Re.wasm.trace:!Re.trace)||qr("END",e)}}),On,nh=M(()=>{yn(),zn(),Bn(),On=class Hf{constructor(t){this.handler=t}async run(t,r,i){qe();let a={},n={};if(typeof t!="object"||t===null||t instanceof Me||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof Me)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let d of r){if(typeof d!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(d)===-1)throw new RangeError(`'fetches' contains invalid output name: ${d}.`);a[d]=null}if(typeof i=="object"&&i!==null)n=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else{let d=!1,c=Object.getOwnPropertyNames(r);for(let f of this.outputNames)if(c.indexOf(f)!==-1){let m=r[f];(m===null||m instanceof Me)&&(d=!0,s=!1,a[f]=m)}if(d){if(typeof i=="object"&&i!==null)n=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else n=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let d of this.inputNames)if(typeof t[d]>"u")throw new Error(`input '${d}' is missing in 'feeds'.`);if(s)for(let d of this.outputNames)a[d]=null;let u=await this.handler.run(t,a,n),l={};for(let d in u)if(Object.hasOwnProperty.call(u,d)){let c=u[d];c instanceof Me?l[d]=c:l[d]=new Me(c.type,c.data,c.dims)}return Ve(),l}async release(){return this.handler.dispose()}static async create(t,r,i,a){qe();let n,s={};if(typeof t=="string"){if(n=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(n=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let c=t,f=0,m=t.byteLength;if(typeof r=="object"&&r!==null)s=r;else if(typeof r=="number"){if(f=r,!Number.isSafeInteger(f))throw new RangeError("'byteOffset' must be an integer.");if(f<0||f>=c.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${c.byteLength}).`);if(m=t.byteLength-f,typeof i=="number"){if(m=i,!Number.isSafeInteger(m))throw new RangeError("'byteLength' must be an integer.");if(m<=0||f+m>c.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${c.byteLength-f}].`);if(typeof a=="object"&&a!==null)s=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else if(typeof i<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");n=new Uint8Array(c,f,m)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[u,l]=await bn(s),d=await u.createInferenceSessionHandler(n,l);return Ve(),new Hf(d)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Kr,sh=M(()=>{nh(),Kr=On}),oh=M(()=>{}),uh=M(()=>{}),lh=M(()=>{}),dh=M(()=>{}),ph={};kt(ph,{InferenceSession:()=>Kr,TRACE:()=>sr,TRACE_FUNC_BEGIN:()=>qe,TRACE_FUNC_END:()=>Ve,Tensor:()=>Me,env:()=>ge,registerBackend:()=>St});var Ge=M(()=>{Yf(),eh(),sh(),zn(),oh(),uh(),Bn(),lh(),dh()}),jr=M(()=>{}),Rn={};kt(Rn,{default:()=>Nn});var Xr,Jr,Nn,ch=M(()=>{mc(),mt(),ni(),Xr="ort-wasm-proxy-worker",Jr=globalThis.self?.name===Xr,Jr&&(self.onmessage=e=>{let{type:t,in:r}=e.data;try{switch(t){case"init-wasm":ui(r.wasm).then(()=>{$a(r).then(()=>{postMessage({type:t})},i=>{postMessage({type:t,err:i})})},i=>{postMessage({type:t,err:i})});break;case"init-ep":{let{epName:i,env:a}=r;va(a,i).then(()=>{postMessage({type:t})},n=>{postMessage({type:t,err:n})});break}case"copy-from":{let{buffer:i}=r,a=Cr(i);postMessage({type:t,out:a});break}case"create":{let{model:i,options:a}=r;xa(i,a).then(n=>{postMessage({type:t,out:n})},n=>{postMessage({type:t,err:n})});break}case"release":Ca(r),postMessage({type:t});break;case"run":{let{sessionId:i,inputIndices:a,inputs:n,outputIndices:s,options:u}=r;ka(i,a,n,s,new Array(s.length).fill(null),u).then(l=>{l.some(d=>d[3]!=="cpu")?postMessage({type:t,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:t,out:l},Ta([...n,...l]))},l=>{postMessage({type:t,err:l})});break}case"end-profiling":Sa(r),postMessage({type:t});break;default:}}catch(i){postMessage({type:t,err:i})}}),Nn=Jr?null:e=>new Worker(e??Be,{type:"module",name:Xr})}),Dn={};kt(Dn,{default:()=>Wn});var Yr,Qr,Wn,Mn,fh=M(()=>{Qr=(Yr=self.location.href,async function(e={}){var t,r,i=e,a=new Promise((o,p)=>{t=o,r=p}),n=typeof window=="object",s=typeof WorkerGlobalScope<"u",u=s&&self.name?.startsWith("em-pthread");i.mountExternalData=(o,p)=>{o.startsWith("./")&&(o=o.substring(2)),(i.Fb||(i.Fb=new Map)).set(o,p)},i.unmountExternalData=()=>{delete i.Fb};var l=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,qc:!0}).buffer.constructor;let d=o=>async(...p)=>{try{if(i.Gb)throw Error("Session already started");let h=i.Gb={ec:p[0],errors:[]},y=await o(...p);if(i.Gb!==h)throw Error("Session mismatch");i.Kb?.flush();let $=h.errors;if(0<$.length){let k=await Promise.all($);if(k=k.filter(R=>R),0<k.length)throw Error(k.join(`
`))}return y}finally{i.Gb=null}};i.jsepInit=(o,p)=>{if(o==="webgpu"){[i.Kb,i.Vb,i.Zb,i.Lb,i.Yb,i.kb,i.$b,i.bc,i.Wb,i.Xb,i.ac]=p;let h=i.Kb;i.jsepRegisterBuffer=(y,$,k,R)=>h.registerBuffer(y,$,k,R),i.jsepGetBuffer=y=>h.getBuffer(y),i.jsepCreateDownloader=(y,$,k)=>h.createDownloader(y,$,k),i.jsepOnCreateSession=y=>{h.onCreateSession(y)},i.jsepOnReleaseSession=y=>{h.onReleaseSession(y)},i.jsepOnRunStart=y=>h.onRunStart(y),i.cc=(y,$)=>{h.upload(y,$)}}else if(o==="webnn"){let h=p[0];[i.oc,i.Ob,i.webnnEnsureTensor,i.Pb,i.webnnDownloadTensor]=p.slice(1),i.webnnReleaseTensorId=i.Ob,i.webnnUploadTensor=i.Pb,i.webnnOnRunStart=y=>h.onRunStart(y),i.webnnOnRunEnd=h.onRunEnd.bind(h),i.webnnRegisterMLContext=(y,$)=>{h.registerMLContext(y,$)},i.webnnOnReleaseSession=y=>{h.onReleaseSession(y)},i.webnnCreateMLTensorDownloader=(y,$)=>h.createMLTensorDownloader(y,$),i.webnnRegisterMLTensor=(y,$,k,R)=>h.registerMLTensor(y,$,k,R),i.webnnCreateMLContext=y=>h.createMLContext(y),i.webnnRegisterMLConstant=(y,$,k,R,W,P)=>h.registerMLConstant(y,$,k,R,W,i.Fb,P),i.webnnRegisterGraphInput=h.registerGraphInput.bind(h),i.webnnIsGraphInput=h.isGraphInput.bind(h),i.webnnRegisterGraphOutput=h.registerGraphOutput.bind(h),i.webnnIsGraphOutput=h.isGraphOutput.bind(h),i.webnnCreateTemporaryTensor=h.createTemporaryTensor.bind(h),i.webnnIsGraphInputOutputTypeSupported=h.isGraphInputOutputTypeSupported.bind(h)}};let c=()=>{let o=(p,h,y)=>(...$)=>{let k=Xe,R=h?.();$=p(...$);let W=h?.();return R!==W&&(p=W,y(R),h=y=null),Xe!=k?new Promise((P,K)=>{ja={resolve:P,reject:K}}):$};(()=>{for(let p of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])i[p]=o(i[p],()=>i[p],h=>i[p]=h)})(),d!==void 0&&(i._OrtRun=d(i._OrtRun),i._OrtRunWithBinding=d(i._OrtRunWithBinding)),c=void 0};i.asyncInit=()=>{c?.()};var f,m,g=Object.assign({},i),b=(o,p)=>{throw p},_="";(n||s)&&(s?_=self.location.href:typeof document<"u"&&document.currentScript&&(_=document.currentScript.src),Yr&&(_=Yr),_=_.startsWith("blob:")?"":_.slice(0,_.replace(/[?#].*/,"").lastIndexOf("/")+1),s&&(m=o=>{var p=new XMLHttpRequest;return p.open("GET",o,!1),p.responseType="arraybuffer",p.send(null),new Uint8Array(p.response)}),f=async o=>{if(q(o))return new Promise((h,y)=>{var $=new XMLHttpRequest;$.open("GET",o,!0),$.responseType="arraybuffer",$.onload=()=>{$.status==200||$.status==0&&$.response?h($.response):y($.status)},$.onerror=y,$.send(null)});var p=await fetch(o,{credentials:"same-origin"});if(p.ok)return p.arrayBuffer();throw Error(p.status+" : "+p.url)});var x=console.log.bind(console),v=console.error.bind(console),w=x,C=v;Object.assign(i,g),g=null;var I,A,T,S,z,D,U,X,Z,ee,V,ie,J,L=i.wasmBinary,oe=!1,q=o=>o.startsWith("file://");function ue(){return I.buffer!=S.buffer&&$e(),S}function N(){return I.buffer!=S.buffer&&$e(),z}function G(){return I.buffer!=S.buffer&&$e(),D}function te(){return I.buffer!=S.buffer&&$e(),U}function B(){return I.buffer!=S.buffer&&$e(),X}function ae(){return I.buffer!=S.buffer&&$e(),Z}function Te(){return I.buffer!=S.buffer&&$e(),ee}function De(){return I.buffer!=S.buffer&&$e(),J}if(u){let o=function(p){try{var h=p.data,y=h.Cb;if(y==="load"){let $=[];self.onmessage=k=>$.push(k),self.startWorker=()=>{postMessage({Cb:"loaded"});for(let k of $)o(k);self.onmessage=o};for(let k of h.Sb)i[k]&&!i[k].proxy||(i[k]=(...R)=>{postMessage({Cb:"callHandler",Rb:k,args:R})},k=="print"&&(w=i[k]),k=="printErr"&&(C=i[k]));I=h.lc,$e(),ve(h.mc)}else if(y==="run"){Sm(h.Bb),Qa(h.Bb,0,0,1,0,0),Mc(),qa(h.Bb),be||(Of(),be=!0);try{Tm(h.hc,h.Ib)}catch($){if($!="unwind")throw $}}else h.target!=="setimmediate"&&(y==="checkMailbox"?be&&zr():y&&(C(`worker: received unknown command ${y}`),C(h)))}catch($){throw Rf(),$}};var ve,be=!1;C=function(...p){p=p.join(" "),console.error(p)},self.alert=function(...p){postMessage({Cb:"alert",text:p.join(" "),jc:Vr()})},self.onunhandledrejection=p=>{throw p.reason||p},self.onmessage=o}function $e(){var o=I.buffer;i.HEAP8=S=new Int8Array(o),i.HEAP16=D=new Int16Array(o),i.HEAPU8=z=new Uint8Array(o),i.HEAPU16=U=new Uint16Array(o),i.HEAP32=X=new Int32Array(o),i.HEAPU32=Z=new Uint32Array(o),i.HEAPF32=ee=new Float32Array(o),i.HEAPF64=J=new Float64Array(o),i.HEAP64=V=new BigInt64Array(o),i.HEAPU64=ie=new BigUint64Array(o)}function Er(){u?startWorker(i):Y.Da()}u||(I=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),$e());var Yt,Qt=0,er=null;function zc(){if(--Qt==0&&er){var o=er;er=null,o()}}function ut(o){throw C(o="Aborted("+o+")"),oe=!0,o=new WebAssembly.RuntimeError(o+". Build with -sASSERTIONS for more info."),r(o),o}function Bc(){return{a:{L:km,Aa:Am,b:zm,$:Pc,A:Hc,pa:Fc,X:Kc,Z:jc,qa:Xc,na:Jc,ga:Yc,ma:Qc,J:ef,Y:tf,V:rf,oa:af,W:nf,va:Bm,E:Om,Q:Rm,O:Dm,D:Mm,v:Vm,r:Gm,P:Um,z:Km,R:jm,ja:Xm,T:Jm,aa:Ym,M:Qm,F:eg,ia:qa,sa:tg,t:rg,Ca:ig,w:sg,o:og,m:lg,c:Za,Ba:dg,n:pg,j:hg,u:mg,p:gg,f:bg,s:yg,l:_g,e:wg,k:$g,h:vg,g:Ig,d:xg,da:Cg,ea:Ag,fa:kg,ba:_f,ca:wf,N:$f,xa:Tg,ua:zg,i:Bg,C:Og,G:Rg,ta:Eg,x:Ng,ra:Dg,U:Wg,q:Sg,y:Mg,K:Vg,S:Gg,za:Ug,ya:Pg,ka:Cf,la:Af,_:Ga,B:kf,I:Sf,ha:Tf,H:Ef,a:I,wa:Va}}}var Da={840156:(o,p,h,y,$)=>{if(i===void 0||!i.Fb)return 1;if((o=Ie(Number(o>>>0))).startsWith("./")&&(o=o.substring(2)),!(o=i.Fb.get(o)))return 2;if(p=Number(p>>>0),h=Number(h>>>0),y=Number(y>>>0),p+h>o.byteLength)return 3;try{let k=o.subarray(p,p+h);switch($){case 0:N().set(k,y>>>0);break;case 1:i.nc?i.nc(y,k):i.cc(y,k);break;default:return 4}return 0}catch{return 4}},840980:(o,p,h)=>{i.Pb(o,N().subarray(p>>>0,p+h>>>0))},841044:()=>i.oc(),841086:o=>{i.Ob(o)},841123:()=>{i.Wb()},841154:()=>{i.Xb()},841183:()=>{i.ac()},841208:o=>i.Vb(o),841241:o=>i.Zb(o),841273:(o,p,h)=>{i.Lb(Number(o),Number(p),Number(h),!0)},841336:(o,p,h)=>{i.Lb(Number(o),Number(p),Number(h))},841393:()=>typeof wasmOffsetConverter<"u",841450:o=>{i.kb("Abs",o,void 0)},841501:o=>{i.kb("Neg",o,void 0)},841552:o=>{i.kb("Floor",o,void 0)},841605:o=>{i.kb("Ceil",o,void 0)},841657:o=>{i.kb("Reciprocal",o,void 0)},841715:o=>{i.kb("Sqrt",o,void 0)},841767:o=>{i.kb("Exp",o,void 0)},841818:o=>{i.kb("Erf",o,void 0)},841869:o=>{i.kb("Sigmoid",o,void 0)},841924:(o,p,h)=>{i.kb("HardSigmoid",o,{alpha:p,beta:h})},842003:o=>{i.kb("Log",o,void 0)},842054:o=>{i.kb("Sin",o,void 0)},842105:o=>{i.kb("Cos",o,void 0)},842156:o=>{i.kb("Tan",o,void 0)},842207:o=>{i.kb("Asin",o,void 0)},842259:o=>{i.kb("Acos",o,void 0)},842311:o=>{i.kb("Atan",o,void 0)},842363:o=>{i.kb("Sinh",o,void 0)},842415:o=>{i.kb("Cosh",o,void 0)},842467:o=>{i.kb("Asinh",o,void 0)},842520:o=>{i.kb("Acosh",o,void 0)},842573:o=>{i.kb("Atanh",o,void 0)},842626:o=>{i.kb("Tanh",o,void 0)},842678:o=>{i.kb("Not",o,void 0)},842729:(o,p,h)=>{i.kb("Clip",o,{min:p,max:h})},842798:o=>{i.kb("Clip",o,void 0)},842850:(o,p)=>{i.kb("Elu",o,{alpha:p})},842908:o=>{i.kb("Gelu",o,void 0)},842960:o=>{i.kb("Relu",o,void 0)},843012:(o,p)=>{i.kb("LeakyRelu",o,{alpha:p})},843076:(o,p)=>{i.kb("ThresholdedRelu",o,{alpha:p})},843146:(o,p)=>{i.kb("Cast",o,{to:p})},843204:o=>{i.kb("Add",o,void 0)},843255:o=>{i.kb("Sub",o,void 0)},843306:o=>{i.kb("Mul",o,void 0)},843357:o=>{i.kb("Div",o,void 0)},843408:o=>{i.kb("Pow",o,void 0)},843459:o=>{i.kb("Equal",o,void 0)},843512:o=>{i.kb("Greater",o,void 0)},843567:o=>{i.kb("GreaterOrEqual",o,void 0)},843629:o=>{i.kb("Less",o,void 0)},843681:o=>{i.kb("LessOrEqual",o,void 0)},843740:(o,p,h,y,$)=>{i.kb("ReduceMean",o,{keepDims:!!p,noopWithEmptyAxes:!!h,axes:y?Array.from(B().subarray(Number(y)>>>0,Number($)>>>0)):[]})},843915:(o,p,h,y,$)=>{i.kb("ReduceMax",o,{keepDims:!!p,noopWithEmptyAxes:!!h,axes:y?Array.from(B().subarray(Number(y)>>>0,Number($)>>>0)):[]})},844089:(o,p,h,y,$)=>{i.kb("ReduceMin",o,{keepDims:!!p,noopWithEmptyAxes:!!h,axes:y?Array.from(B().subarray(Number(y)>>>0,Number($)>>>0)):[]})},844263:(o,p,h,y,$)=>{i.kb("ReduceProd",o,{keepDims:!!p,noopWithEmptyAxes:!!h,axes:y?Array.from(B().subarray(Number(y)>>>0,Number($)>>>0)):[]})},844438:(o,p,h,y,$)=>{i.kb("ReduceSum",o,{keepDims:!!p,noopWithEmptyAxes:!!h,axes:y?Array.from(B().subarray(Number(y)>>>0,Number($)>>>0)):[]})},844612:(o,p,h,y,$)=>{i.kb("ReduceL1",o,{keepDims:!!p,noopWithEmptyAxes:!!h,axes:y?Array.from(B().subarray(Number(y)>>>0,Number($)>>>0)):[]})},844785:(o,p,h,y,$)=>{i.kb("ReduceL2",o,{keepDims:!!p,noopWithEmptyAxes:!!h,axes:y?Array.from(B().subarray(Number(y)>>>0,Number($)>>>0)):[]})},844958:(o,p,h,y,$)=>{i.kb("ReduceLogSum",o,{keepDims:!!p,noopWithEmptyAxes:!!h,axes:y?Array.from(B().subarray(Number(y)>>>0,Number($)>>>0)):[]})},845135:(o,p,h,y,$)=>{i.kb("ReduceSumSquare",o,{keepDims:!!p,noopWithEmptyAxes:!!h,axes:y?Array.from(B().subarray(Number(y)>>>0,Number($)>>>0)):[]})},845315:(o,p,h,y,$)=>{i.kb("ReduceLogSumExp",o,{keepDims:!!p,noopWithEmptyAxes:!!h,axes:y?Array.from(B().subarray(Number(y)>>>0,Number($)>>>0)):[]})},845495:o=>{i.kb("Where",o,void 0)},845548:(o,p,h)=>{i.kb("Transpose",o,{perm:p?Array.from(B().subarray(Number(p)>>>0,Number(h)>>>0)):[]})},845672:(o,p,h,y)=>{i.kb("DepthToSpace",o,{blocksize:p,mode:Ie(h),format:y?"NHWC":"NCHW"})},845805:(o,p,h,y)=>{i.kb("DepthToSpace",o,{blocksize:p,mode:Ie(h),format:y?"NHWC":"NCHW"})},845938:(o,p,h,y,$,k,R,W,P,K,se,pe,he,Ae,Rt)=>{i.kb("ConvTranspose",o,{format:P?"NHWC":"NCHW",autoPad:p,dilations:[h],group:y,kernelShape:[$],pads:[k,R],strides:[W],wIsConst:()=>!!ue()[K>>>0],outputPadding:se?Array.from(B().subarray(Number(se)>>>0,Number(pe)>>>0)):[],outputShape:he?Array.from(B().subarray(Number(he)>>>0,Number(Ae)>>>0)):[],activation:Ie(Rt)})},846371:(o,p,h,y,$,k,R,W,P,K,se,pe,he,Ae)=>{i.kb("ConvTranspose",o,{format:W?"NHWC":"NCHW",autoPad:p,dilations:Array.from(B().subarray(Number(h)>>>0,2+(Number(h)>>>0)>>>0)),group:y,kernelShape:Array.from(B().subarray(Number($)>>>0,2+(Number($)>>>0)>>>0)),pads:Array.from(B().subarray(Number(k)>>>0,4+(Number(k)>>>0)>>>0)),strides:Array.from(B().subarray(Number(R)>>>0,2+(Number(R)>>>0)>>>0)),wIsConst:()=>!!ue()[P>>>0],outputPadding:K?Array.from(B().subarray(Number(K)>>>0,Number(se)>>>0)):[],outputShape:pe?Array.from(B().subarray(Number(pe)>>>0,Number(he)>>>0)):[],activation:Ie(Ae)})},847032:(o,p,h,y,$,k,R,W,P,K,se,pe,he,Ae,Rt)=>{i.kb("ConvTranspose",o,{format:P?"NHWC":"NCHW",autoPad:p,dilations:[h],group:y,kernelShape:[$],pads:[k,R],strides:[W],wIsConst:()=>!!ue()[K>>>0],outputPadding:se?Array.from(B().subarray(Number(se)>>>0,Number(pe)>>>0)):[],outputShape:he?Array.from(B().subarray(Number(he)>>>0,Number(Ae)>>>0)):[],activation:Ie(Rt)})},847465:(o,p,h,y,$,k,R,W,P,K,se,pe,he,Ae)=>{i.kb("ConvTranspose",o,{format:W?"NHWC":"NCHW",autoPad:p,dilations:Array.from(B().subarray(Number(h)>>>0,2+(Number(h)>>>0)>>>0)),group:y,kernelShape:Array.from(B().subarray(Number($)>>>0,2+(Number($)>>>0)>>>0)),pads:Array.from(B().subarray(Number(k)>>>0,4+(Number(k)>>>0)>>>0)),strides:Array.from(B().subarray(Number(R)>>>0,2+(Number(R)>>>0)>>>0)),wIsConst:()=>!!ue()[P>>>0],outputPadding:K?Array.from(B().subarray(Number(K)>>>0,Number(se)>>>0)):[],outputShape:pe?Array.from(B().subarray(Number(pe)>>>0,Number(he)>>>0)):[],activation:Ie(Ae)})},848126:(o,p)=>{i.kb("GlobalAveragePool",o,{format:p?"NHWC":"NCHW"})},848217:(o,p,h,y,$,k,R,W,P,K,se,pe,he,Ae)=>{i.kb("AveragePool",o,{format:Ae?"NHWC":"NCHW",auto_pad:p,ceil_mode:h,count_include_pad:y,storage_order:$,dilations:k?Array.from(B().subarray(Number(k)>>>0,Number(R)>>>0)):[],kernel_shape:W?Array.from(B().subarray(Number(W)>>>0,Number(P)>>>0)):[],pads:K?Array.from(B().subarray(Number(K)>>>0,Number(se)>>>0)):[],strides:pe?Array.from(B().subarray(Number(pe)>>>0,Number(he)>>>0)):[]})},848696:(o,p)=>{i.kb("GlobalAveragePool",o,{format:p?"NHWC":"NCHW"})},848787:(o,p,h,y,$,k,R,W,P,K,se,pe,he,Ae)=>{i.kb("AveragePool",o,{format:Ae?"NHWC":"NCHW",auto_pad:p,ceil_mode:h,count_include_pad:y,storage_order:$,dilations:k?Array.from(B().subarray(Number(k)>>>0,Number(R)>>>0)):[],kernel_shape:W?Array.from(B().subarray(Number(W)>>>0,Number(P)>>>0)):[],pads:K?Array.from(B().subarray(Number(K)>>>0,Number(se)>>>0)):[],strides:pe?Array.from(B().subarray(Number(pe)>>>0,Number(he)>>>0)):[]})},849266:(o,p)=>{i.kb("GlobalMaxPool",o,{format:p?"NHWC":"NCHW"})},849353:(o,p,h,y,$,k,R,W,P,K,se,pe,he,Ae)=>{i.kb("MaxPool",o,{format:Ae?"NHWC":"NCHW",auto_pad:p,ceil_mode:h,count_include_pad:y,storage_order:$,dilations:k?Array.from(B().subarray(Number(k)>>>0,Number(R)>>>0)):[],kernel_shape:W?Array.from(B().subarray(Number(W)>>>0,Number(P)>>>0)):[],pads:K?Array.from(B().subarray(Number(K)>>>0,Number(se)>>>0)):[],strides:pe?Array.from(B().subarray(Number(pe)>>>0,Number(he)>>>0)):[]})},849828:(o,p)=>{i.kb("GlobalMaxPool",o,{format:p?"NHWC":"NCHW"})},849915:(o,p,h,y,$,k,R,W,P,K,se,pe,he,Ae)=>{i.kb("MaxPool",o,{format:Ae?"NHWC":"NCHW",auto_pad:p,ceil_mode:h,count_include_pad:y,storage_order:$,dilations:k?Array.from(B().subarray(Number(k)>>>0,Number(R)>>>0)):[],kernel_shape:W?Array.from(B().subarray(Number(W)>>>0,Number(P)>>>0)):[],pads:K?Array.from(B().subarray(Number(K)>>>0,Number(se)>>>0)):[],strides:pe?Array.from(B().subarray(Number(pe)>>>0,Number(he)>>>0)):[]})},850390:(o,p,h,y,$)=>{i.kb("Gemm",o,{alpha:p,beta:h,transA:y,transB:$})},850494:o=>{i.kb("MatMul",o,void 0)},850548:(o,p,h,y)=>{i.kb("ArgMax",o,{keepDims:!!p,selectLastIndex:!!h,axis:y})},850656:(o,p,h,y)=>{i.kb("ArgMin",o,{keepDims:!!p,selectLastIndex:!!h,axis:y})},850764:(o,p)=>{i.kb("Softmax",o,{axis:p})},850827:(o,p)=>{i.kb("Concat",o,{axis:p})},850887:(o,p,h,y,$)=>{i.kb("Split",o,{axis:p,numOutputs:h,splitSizes:y?Array.from(B().subarray(Number(y)>>>0,Number($)>>>0)):[]})},851043:o=>{i.kb("Expand",o,void 0)},851097:(o,p)=>{i.kb("Gather",o,{axis:Number(p)})},851168:(o,p)=>{i.kb("GatherElements",o,{axis:Number(p)})},851247:(o,p)=>{i.kb("GatherND",o,{batch_dims:Number(p)})},851326:(o,p,h,y,$,k,R,W,P,K,se)=>{i.kb("Resize",o,{antialias:p,axes:h?Array.from(B().subarray(Number(h)>>>0,Number(y)>>>0)):[],coordinateTransformMode:Ie($),cubicCoeffA:k,excludeOutside:R,extrapolationValue:W,keepAspectRatioPolicy:Ie(P),mode:Ie(K),nearestMode:Ie(se)})},851688:(o,p,h,y,$,k,R)=>{i.kb("Slice",o,{starts:p?Array.from(B().subarray(Number(p)>>>0,Number(h)>>>0)):[],ends:y?Array.from(B().subarray(Number(y)>>>0,Number($)>>>0)):[],axes:k?Array.from(B().subarray(Number(k)>>>0,Number(R)>>>0)):[]})},851952:o=>{i.kb("Tile",o,void 0)},852004:(o,p,h)=>{i.kb("InstanceNormalization",o,{epsilon:p,format:h?"NHWC":"NCHW"})},852118:(o,p,h)=>{i.kb("InstanceNormalization",o,{epsilon:p,format:h?"NHWC":"NCHW"})},852232:o=>{i.kb("Range",o,void 0)},852285:(o,p)=>{i.kb("Einsum",o,{equation:Ie(p)})},852366:(o,p,h,y,$)=>{i.kb("Pad",o,{mode:p,value:h,pads:y?Array.from(B().subarray(Number(y)>>>0,Number($)>>>0)):[]})},852509:(o,p,h,y,$,k)=>{i.kb("BatchNormalization",o,{epsilon:p,momentum:h,spatial:!!$,trainingMode:!!y,format:k?"NHWC":"NCHW"})},852678:(o,p,h,y,$,k)=>{i.kb("BatchNormalization",o,{epsilon:p,momentum:h,spatial:!!$,trainingMode:!!y,format:k?"NHWC":"NCHW"})},852847:(o,p,h)=>{i.kb("CumSum",o,{exclusive:Number(p),reverse:Number(h)})},852944:(o,p,h)=>{i.kb("DequantizeLinear",o,{axis:p,blockSize:h})},853034:(o,p,h,y,$)=>{i.kb("GridSample",o,{align_corners:p,mode:Ie(h),padding_mode:Ie(y),format:$?"NHWC":"NCHW"})},853204:(o,p,h,y,$)=>{i.kb("GridSample",o,{align_corners:p,mode:Ie(h),padding_mode:Ie(y),format:$?"NHWC":"NCHW"})},853374:(o,p)=>{i.kb("ScatterND",o,{reduction:Ie(p)})},853459:(o,p,h,y,$,k,R,W,P)=>{i.kb("Attention",o,{numHeads:p,isUnidirectional:h,maskFilterValue:y,scale:$,doRotary:k,qkvHiddenSizes:R?Array.from(B().subarray(Number(W)>>>0,Number(W)+R>>>0)):[],pastPresentShareBuffer:!!P})},853731:o=>{i.kb("BiasAdd",o,void 0)},853786:o=>{i.kb("BiasSplitGelu",o,void 0)},853847:o=>{i.kb("FastGelu",o,void 0)},853903:(o,p,h,y,$,k,R,W,P,K,se,pe,he,Ae,Rt,Hg)=>{i.kb("Conv",o,{format:pe?"NHWC":"NCHW",auto_pad:p,dilations:h?Array.from(B().subarray(Number(h)>>>0,Number(y)>>>0)):[],group:$,kernel_shape:k?Array.from(B().subarray(Number(k)>>>0,Number(R)>>>0)):[],pads:W?Array.from(B().subarray(Number(W)>>>0,Number(P)>>>0)):[],strides:K?Array.from(B().subarray(Number(K)>>>0,Number(se)>>>0)):[],w_is_const:()=>!!ue()[Number(he)>>>0],activation:Ie(Ae),activation_params:Rt?Array.from(Te().subarray(Number(Rt)>>>0,Number(Hg)>>>0)):[]})},854487:o=>{i.kb("Gelu",o,void 0)},854539:(o,p,h,y,$,k,R,W,P)=>{i.kb("GroupQueryAttention",o,{numHeads:p,kvNumHeads:h,scale:y,softcap:$,doRotary:k,rotaryInterleaved:R,smoothSoftmax:W,localWindowSize:P})},854756:(o,p,h,y)=>{i.kb("LayerNormalization",o,{axis:p,epsilon:h,simplified:!!y})},854867:(o,p,h,y)=>{i.kb("LayerNormalization",o,{axis:p,epsilon:h,simplified:!!y})},854978:(o,p,h,y,$,k)=>{i.kb("MatMulNBits",o,{k:p,n:h,accuracyLevel:y,bits:$,blockSize:k})},855105:(o,p,h,y,$,k)=>{i.kb("MultiHeadAttention",o,{numHeads:p,isUnidirectional:h,maskFilterValue:y,scale:$,doRotary:k})},855264:(o,p)=>{i.kb("QuickGelu",o,{alpha:p})},855328:(o,p,h,y,$)=>{i.kb("RotaryEmbedding",o,{interleaved:!!p,numHeads:h,rotaryEmbeddingDim:y,scale:$})},855467:(o,p,h)=>{i.kb("SkipLayerNormalization",o,{epsilon:p,simplified:!!h})},855569:(o,p,h)=>{i.kb("SkipLayerNormalization",o,{epsilon:p,simplified:!!h})},855671:(o,p,h,y)=>{i.kb("GatherBlockQuantized",o,{gatherAxis:p,quantizeAxis:h,blockSize:y})},855792:o=>{i.$b(o)},855826:(o,p)=>i.bc(Number(o),Number(p),i.Gb.ec,i.Gb.errors)};function Am(o,p,h){return ff(async()=>{await i.Yb(Number(o),Number(p),Number(h))})}function km(){return typeof wasmOffsetConverter<"u"}class Wa{name="ExitStatus";constructor(p){this.message=`Program terminated with exit(${p})`,this.status=p}}var Oc=o=>{o.terminate(),o.onmessage=()=>{}},Ma=[],Rc=o=>{dt.length==0&&(Gc(),Vc(dt[0]));var p=dt.pop();if(!p)return 6;tr.push(p),At[o.Bb]=p,p.Bb=o.Bb;var h={Cb:"run",hc:o.fc,Ib:o.Ib,Bb:o.Bb};return p.postMessage(h,o.Nb),0},lt=0,ye=(o,p,...h)=>{for(var y=2*h.length,$=rn(),k=tn(8*y),R=k>>>3,W=0;W<h.length;W++){var P=h[W];typeof P=="bigint"?(V[R+2*W]=1n,V[R+2*W+1]=P):(V[R+2*W]=0n,De()[R+2*W+1>>>0]=P)}return o=Nf(o,0,y,k,p),Ur($),o};function Va(o){if(u)return ye(0,1,o);if(T=o,!(0<lt)){for(var p of tr)Oc(p);for(p of dt)Oc(p);dt=[],tr=[],At={},oe=!0}b(0,new Wa(o))}function Nc(o){if(u)return ye(1,0,o);Ga(o)}var Ga=o=>{if(T=o,u)throw Nc(o),"unwind";Va(o)},dt=[],tr=[],Dc=[],At={},Wc=o=>{var p=o.Bb;delete At[p],dt.push(o),tr.splice(tr.indexOf(o),1),o.Bb=0,Df(p)};function Mc(){Dc.forEach(o=>o())}var Vc=o=>new Promise(p=>{o.onmessage=$=>{var k=($=$.data).Cb;if($.Hb&&$.Hb!=Vr()){var R=At[$.Hb];R?R.postMessage($,$.Nb):C(`Internal error! Worker sent a message "${k}" to target pthread ${$.Hb}, but that thread no longer exists!`)}else k==="checkMailbox"?zr():k==="spawnThread"?Rc($):k==="cleanupThread"?Wc(At[$.ic]):k==="loaded"?(o.loaded=!0,p(o)):k==="alert"?alert(`Thread ${$.jc}: ${$.text}`):$.target==="setimmediate"?o.postMessage($):k==="callHandler"?i[$.Rb](...$.args):k&&C(`worker sent an unknown command ${k}`)},o.onerror=$=>{throw C(`worker sent an error! ${$.filename}:${$.lineno}: ${$.message}`),$};var h,y=[];for(h of[])i.propertyIsEnumerable(h)&&y.push(h);o.postMessage({Cb:"load",Sb:y,lc:I,mc:A})});function Gc(){var o=new Worker((()=>{let p=URL;return self.location.href>"file:"&&self.location.href<"file;"?new p("ort.bundle.min.mjs",self.location.href):new URL(self.location.href)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});dt.push(o)}var Sm=o=>{$e();var p=ae()[o+52>>>2>>>0];o=ae()[o+56>>>2>>>0],Vf(p,p-o),Ur(p)},Tm=(o,p)=>{lt=0,o=Gf(o,p),0<lt?T=o:en(o)};class Em{constructor(p){this.Jb=p-24}}function zm(o,p,h){var y=new Em(o>>>=0);throw p>>>=0,h>>>=0,ae()[y.Jb+16>>>2>>>0]=0,ae()[y.Jb+4>>>2>>>0]=p,ae()[y.Jb+8>>>2>>>0]=h,o}function Uc(o,p,h,y){return u?ye(2,1,o,p,h,y):Pc(o,p,h,y)}function Pc(o,p,h,y){if(o>>>=0,h>>>=0,y>>>=0,l===void 0)return 6;var $=[];return u&&$.length===0?Uc(o,p>>>=0,h,y):(o={fc:h,Bb:o,Ib:y,Nb:$},u?(o.Cb="spawnThread",postMessage(o,$),0):Rc(o))}var Lc=typeof TextDecoder<"u"?new TextDecoder:void 0,Zc=(o,p=0,h=NaN)=>{var y=(p>>>=0)+h;for(h=p;o[h]&&!(h>=y);)++h;if(16<h-p&&o.buffer&&Lc)return Lc.decode(o.buffer instanceof ArrayBuffer?o.subarray(p,h):o.slice(p,h));for(y="";p<h;){var $=o[p++];if(128&$){var k=63&o[p++];if((224&$)==192)y+=String.fromCharCode((31&$)<<6|k);else{var R=63&o[p++];65536>($=(240&$)==224?(15&$)<<12|k<<6|R:(7&$)<<18|k<<12|R<<6|63&o[p++])?y+=String.fromCharCode($):($-=65536,y+=String.fromCharCode(55296|$>>10,56320|1023&$))}}else y+=String.fromCharCode($)}return y},Ie=(o,p)=>(o>>>=0)?Zc(N(),o,p):"";function Hc(o,p,h){return u?ye(3,1,o,p,h):0}function Fc(o,p){if(u)return ye(4,1,o,p)}var qc=o=>{for(var p=0,h=0;h<o.length;++h){var y=o.charCodeAt(h);127>=y?p++:2047>=y?p+=2:55296<=y&&57343>=y?(p+=4,++h):p+=3}return p},Ot=(o,p,h)=>{var y=N();if(p>>>=0,0<h){var $=p;h=p+h-1;for(var k=0;k<o.length;++k){var R=o.charCodeAt(k);if(55296<=R&&57343>=R&&(R=65536+((1023&R)<<10)|1023&o.charCodeAt(++k)),127>=R){if(p>=h)break;y[p++>>>0]=R}else{if(2047>=R){if(p+1>=h)break;y[p++>>>0]=192|R>>6}else{if(65535>=R){if(p+2>=h)break;y[p++>>>0]=224|R>>12}else{if(p+3>=h)break;y[p++>>>0]=240|R>>18,y[p++>>>0]=128|R>>12&63}y[p++>>>0]=128|R>>6&63}y[p++>>>0]=128|63&R}}y[p>>>0]=0,o=p-$}else o=0;return o};function Kc(o,p){if(u)return ye(5,1,o,p)}function jc(o,p,h){if(u)return ye(6,1,o,p,h)}function Xc(o,p,h){return u?ye(7,1,o,p,h):0}function Jc(o,p){if(u)return ye(8,1,o,p)}function Yc(o,p,h){if(u)return ye(9,1,o,p,h)}function Qc(o,p,h,y){if(u)return ye(10,1,o,p,h,y)}function ef(o,p,h,y){if(u)return ye(11,1,o,p,h,y)}function tf(o,p,h,y){if(u)return ye(12,1,o,p,h,y)}function rf(o){if(u)return ye(13,1,o)}function af(o,p){if(u)return ye(14,1,o,p)}function nf(o,p,h){if(u)return ye(15,1,o,p,h)}var sf,pt,Bm=()=>ut(""),je=o=>{for(var p="";N()[o>>>0];)p+=sf[N()[o++>>>0]];return p},Ua={},Pa={};function tt(o,p,h={}){return(function(y,$,k={}){var R=$.name;if(!y)throw new pt(`type "${R}" must have a positive integer typeid pointer`);if(Pa.hasOwnProperty(y)){if(k.Tb)return;throw new pt(`Cannot register type '${R}' twice`)}Pa[y]=$,Ua.hasOwnProperty(y)&&($=Ua[y],delete Ua[y],$.forEach(W=>W()))})(o,p,h)}var of=(o,p,h)=>{switch(p){case 1:return h?y=>ue()[y>>>0]:y=>N()[y>>>0];case 2:return h?y=>G()[y>>>1>>>0]:y=>te()[y>>>1>>>0];case 4:return h?y=>B()[y>>>2>>>0]:y=>ae()[y>>>2>>>0];case 8:return h?y=>V[y>>>3]:y=>ie[y>>>3];default:throw new TypeError(`invalid integer width (${p}): ${o}`)}};function Om(o,p,h){h>>>=0,tt(o>>>=0,{name:p=je(p>>>0),fromWireType:y=>y,toWireType:function(y,$){if(typeof $!="bigint"&&typeof $!="number")throw $=$===null?"null":(y=typeof $)=="object"||y==="array"||y==="function"?$.toString():""+$,new TypeError(`Cannot convert "${$}" to ${this.name}`);return typeof $=="number"&&($=BigInt($)),$},Db:ct,readValueFromPointer:of(p,h,p.indexOf("u")==-1),Eb:null})}var ct=8;function Rm(o,p,h,y){tt(o>>>=0,{name:p=je(p>>>0),fromWireType:function($){return!!$},toWireType:function($,k){return k?h:y},Db:ct,readValueFromPointer:function($){return this.fromWireType(N()[$>>>0])},Eb:null})}var La=[],rt=[];function Za(o){9<(o>>>=0)&&--rt[o+1]==0&&(rt[o]=void 0,La.push(o))}var Ee=o=>{if(!o)throw new pt("Cannot use deleted val. handle = "+o);return rt[o]},We=o=>{switch(o){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let p=La.pop()||rt.length;return rt[p]=o,rt[p+1]=1,p}};function Ha(o){return this.fromWireType(ae()[o>>>2>>>0])}var Nm={name:"emscripten::val",fromWireType:o=>{var p=Ee(o);return Za(o),p},toWireType:(o,p)=>We(p),Db:ct,readValueFromPointer:Ha,Eb:null};function Dm(o){return tt(o>>>0,Nm)}var Wm=(o,p)=>{switch(p){case 4:return function(h){return this.fromWireType(Te()[h>>>2>>>0])};case 8:return function(h){return this.fromWireType(De()[h>>>3>>>0])};default:throw new TypeError(`invalid float width (${p}): ${o}`)}};function Mm(o,p,h){h>>>=0,tt(o>>>=0,{name:p=je(p>>>0),fromWireType:y=>y,toWireType:(y,$)=>$,Db:ct,readValueFromPointer:Wm(p,h),Eb:null})}function Vm(o,p,h,y,$){if(o>>>=0,h>>>=0,p=je(p>>>0),$===-1&&($=4294967295),$=W=>W,y===0){var k=32-8*h;$=W=>W<<k>>>k}var R=p.includes("unsigned")?function(W,P){return P>>>0}:function(W,P){return P};tt(o,{name:p,fromWireType:$,toWireType:R,Db:ct,readValueFromPointer:of(p,h,y!==0),Eb:null})}function Gm(o,p,h){function y(k){var R=ae()[k>>>2>>>0];return k=ae()[k+4>>>2>>>0],new $(ue().buffer,k,R)}var $=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][p];tt(o>>>=0,{name:h=je(h>>>0),fromWireType:y,Db:ct,readValueFromPointer:y},{Tb:!0})}function Um(o,p){tt(o>>>=0,{name:p=je(p>>>0),fromWireType:function(h){for(var y,$=ae()[h>>>2>>>0],k=h+4,R=k,W=0;W<=$;++W){var P=k+W;W!=$&&N()[P>>>0]!=0||(R=Ie(R,P-R),y===void 0?y=R:(y+="\0",y+=R),R=P+1)}return Je(h),y},toWireType:function(h,y){y instanceof ArrayBuffer&&(y=new Uint8Array(y));var $=typeof y=="string";if(!($||y instanceof Uint8Array||y instanceof Uint8ClampedArray||y instanceof Int8Array))throw new pt("Cannot pass non-string to std::string");var k=$?qc(y):y.length,R=Gr(4+k+1),W=R+4;if(ae()[R>>>2>>>0]=k,$)Ot(y,W,k+1);else if($)for($=0;$<k;++$){var P=y.charCodeAt($);if(255<P)throw Je(R),new pt("String has UTF-16 code units that do not fit in 8 bits");N()[W+$>>>0]=P}else for($=0;$<k;++$)N()[W+$>>>0]=y[$];return h!==null&&h.push(Je,R),R},Db:ct,readValueFromPointer:Ha,Eb(h){Je(h)}})}var uf=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Pm=(o,p)=>{for(var h=o>>1,y=h+p/2;!(h>=y)&&te()[h>>>0];)++h;if(32<(h<<=1)-o&&uf)return uf.decode(N().slice(o,h));for(h="",y=0;!(y>=p/2);++y){var $=G()[o+2*y>>>1>>>0];if($==0)break;h+=String.fromCharCode($)}return h},Lm=(o,p,h)=>{if(h??=2147483647,2>h)return 0;var y=p;h=(h-=2)<2*o.length?h/2:o.length;for(var $=0;$<h;++$){var k=o.charCodeAt($);G()[p>>>1>>>0]=k,p+=2}return G()[p>>>1>>>0]=0,p-y},Zm=o=>2*o.length,Hm=(o,p)=>{for(var h=0,y="";!(h>=p/4);){var $=B()[o+4*h>>>2>>>0];if($==0)break;++h,65536<=$?($-=65536,y+=String.fromCharCode(55296|$>>10,56320|1023&$)):y+=String.fromCharCode($)}return y},Fm=(o,p,h)=>{if(p>>>=0,h??=2147483647,4>h)return 0;var y=p;h=y+h-4;for(var $=0;$<o.length;++$){var k=o.charCodeAt($);if(55296<=k&&57343>=k&&(k=65536+((1023&k)<<10)|1023&o.charCodeAt(++$)),B()[p>>>2>>>0]=k,(p+=4)+4>h)break}return B()[p>>>2>>>0]=0,p-y},qm=o=>{for(var p=0,h=0;h<o.length;++h){var y=o.charCodeAt(h);55296<=y&&57343>=y&&++h,p+=4}return p};function Km(o,p,h){if(o>>>=0,p>>>=0,h=je(h>>>=0),p===2)var y=Pm,$=Lm,k=Zm,R=W=>te()[W>>>1>>>0];else p===4&&(y=Hm,$=Fm,k=qm,R=W=>ae()[W>>>2>>>0]);tt(o,{name:h,fromWireType:W=>{for(var P,K=ae()[W>>>2>>>0],se=W+4,pe=0;pe<=K;++pe){var he=W+4+pe*p;pe!=K&&R(he)!=0||(se=y(se,he-se),P===void 0?P=se:(P+="\0",P+=se),se=he+p)}return Je(W),P},toWireType:(W,P)=>{if(typeof P!="string")throw new pt(`Cannot pass non-string to C++ string type ${h}`);var K=k(P),se=Gr(4+K+p);return ae()[se>>>2>>>0]=K/p,$(P,se+4,K+p),W!==null&&W.push(Je,se),se},Db:ct,readValueFromPointer:Ha,Eb(W){Je(W)}})}function jm(o,p){tt(o>>>=0,{Ub:!0,name:p=je(p>>>0),Db:0,fromWireType:()=>{},toWireType:()=>{}})}function Xm(o){Qa(o>>>0,!s,1,!n,131072,!1),Mc()}var Fa=o=>{if(!oe)try{if(o(),!(0<lt))try{u?en(T):Ga(T)}catch(p){p instanceof Wa||p=="unwind"||b(0,p)}}catch(p){p instanceof Wa||p=="unwind"||b(0,p)}};function qa(o){o>>>=0,typeof Atomics.kc=="function"&&(Atomics.kc(B(),o>>>2,o).value.then(zr),o+=128,Atomics.store(B(),o>>>2,1))}var zr=()=>{var o=Vr();o&&(qa(o),Fa(Mf))};function Jm(o,p){(o>>>=0)==p>>>0?setTimeout(zr):u?postMessage({Hb:o,Cb:"checkMailbox"}):(o=At[o])&&o.postMessage({Cb:"checkMailbox"})}var Ka=[];function Ym(o,p,h,y,$){for(p>>>=0,y/=2,Ka.length=y,h=$>>>0>>>3,$=0;$<y;$++)Ka[$]=V[h+2*$]?V[h+2*$+1]:De()[h+2*$+1>>>0];return(p?Da[p]:Zg[o])(...Ka)}var Qm=()=>{lt=0};function eg(o){o>>>=0,u?postMessage({Cb:"cleanupThread",ic:o}):Wc(At[o])}function tg(o){}var Br=(o,p)=>{var h=Pa[o];if(h===void 0)throw o=Bf(o),h=je(o),Je(o),new pt(`${p} has unknown type ${h}`);return h},lf=(o,p,h)=>{var y=[];return o=o.toWireType(y,h),y.length&&(ae()[p>>>2>>>0]=We(y)),o};function rg(o,p,h){return p>>>=0,h>>>=0,o=Ee(o>>>0),p=Br(p,"emval::as"),lf(p,h,o)}function ig(o,p){return p>>>=0,o=Ee(o>>>0),(p=Br(p,"emval::as")).toWireType(null,o)}var Or=o=>{try{o()}catch(p){ut(p)}},ft=0,Xe=null,df=0,Rr=[],pf={},cf={},ag=0,ja=null,ng=[];function ff(o){return(function(p){if(!oe){if(ft===0){var h=!1,y=!1;p(($=0)=>{if(!oe&&(df=$,h=!0,y)){ft=2,Or(()=>Lf(Xe)),typeof MainLoop<"u"&&MainLoop.Qb&&MainLoop.resume(),$=!1;try{var k=(function(){var P=B()[Xe+8>>>2>>>0];return P=Y[cf[P]],--lt,P()})()}catch(P){k=P,$=!0}var R=!1;if(!Xe){var W=ja;W&&(ja=null,($?W.reject:W.resolve)(k),R=!0)}if($&&!R)throw k}}),y=!0,h||(ft=1,Xe=(function(){var $=Gr(65548),k=$+12;ae()[$>>>2>>>0]=k,ae()[$+4>>>2>>>0]=k+65536,k=Rr[0];var R=pf[k];return R===void 0&&(R=ag++,pf[k]=R,cf[R]=k),k=R,B()[$+8>>>2>>>0]=k,$})(),typeof MainLoop<"u"&&MainLoop.Qb&&MainLoop.pause(),Or(()=>Uf(Xe)))}else ft===2?(ft=0,Or(Zf),Je(Xe),Xe=null,ng.forEach(Fa)):ut(`invalid state: ${ft}`);return df}})(p=>{o().then(p)})}function sg(o){return o>>>=0,ff(async()=>{var p=await Ee(o);return We(p)})}var Nr=[];function og(o,p,h,y){return h>>>=0,y>>>=0,(o=Nr[o>>>0])(null,p=Ee(p>>>0),h,y)}var ug={},Dr=o=>{var p=ug[o];return p===void 0?je(o):p};function lg(o,p,h,y,$){return h>>>=0,y>>>=0,$>>>=0,(o=Nr[o>>>0])(p=Ee(p>>>0),p[h=Dr(h)],y,$)}function dg(o,p){return p>>>=0,(o=Ee(o>>>0))==Ee(p)}var hf=()=>typeof globalThis=="object"?globalThis:Function("return this")();function pg(o){return(o>>>=0)==0?We(hf()):(o=Dr(o),We(hf()[o]))}var cg=o=>{var p=Nr.length;return Nr.push(o),p},fg=(o,p)=>{for(var h=Array(o),y=0;y<o;++y)h[y]=Br(ae()[p+4*y>>>2>>>0],"parameter "+y);return h},mf=(o,p)=>Object.defineProperty(p,"name",{value:o});function hg(o,p,h){var y=(p=fg(o,p>>>0)).shift();o--;var $=`return function (obj, func, destructorsRef, args) {
`,k=0,R=[];h===0&&R.push("obj");for(var W=["retType"],P=[y],K=0;K<o;++K)R.push("arg"+K),W.push("argType"+K),P.push(p[K]),$+=`  var arg${K} = argType${K}.readValueFromPointer(args${k?"+"+k:""});
`,k+=p[K].Db;return $+=`  var rv = ${h===1?"new func":"func.call"}(${R.join(", ")});
`,y.Ub||(W.push("emval_returnValue"),P.push(lf),$+=`  return emval_returnValue(retType, destructorsRef, rv);
`),W.push($+`};
`),o=(function(se){var pe=Function;if(!(pe instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof pe} which is not a function`);var he=mf(pe.name||"unknownFunctionName",function(){});return he.prototype=pe.prototype,he=new he,(se=pe.apply(he,se))instanceof Object?se:he})(W)(...P),h=`methodCaller<(${p.map(se=>se.name).join(", ")}) => ${y.name}>`,cg(mf(h,o))}function mg(o){return o=Dr(o>>>0),We(i[o])}function gg(o,p){return p>>>=0,o=Ee(o>>>0),p=Ee(p),We(o[p])}function bg(o){9<(o>>>=0)&&(rt[o+1]+=1)}function yg(){return We([])}function _g(o){o=Ee(o>>>0);for(var p=Array(o.length),h=0;h<o.length;h++)p[h]=o[h];return We(p)}function wg(o){return We(Dr(o>>>0))}function $g(){return We({})}function vg(o){for(var p=Ee(o>>>=0);p.length;){var h=p.pop();p.pop()(h)}Za(o)}function Ig(o,p,h){p>>>=0,h>>>=0,o=Ee(o>>>0),p=Ee(p),h=Ee(h),o[p]=h}function xg(o,p){return p>>>=0,o=(o=Br(o>>>0,"_emval_take_value")).readValueFromPointer(p),We(o)}function Cg(o,p){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),p>>>=0,o=new Date(1e3*o),B()[p>>>2>>>0]=o.getUTCSeconds(),B()[p+4>>>2>>>0]=o.getUTCMinutes(),B()[p+8>>>2>>>0]=o.getUTCHours(),B()[p+12>>>2>>>0]=o.getUTCDate(),B()[p+16>>>2>>>0]=o.getUTCMonth(),B()[p+20>>>2>>>0]=o.getUTCFullYear()-1900,B()[p+24>>>2>>>0]=o.getUTCDay(),o=(o.getTime()-Date.UTC(o.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,B()[p+28>>>2>>>0]=o}var gf=o=>o%4==0&&(o%100!=0||o%400==0),bf=[0,31,60,91,121,152,182,213,244,274,305,335],yf=[0,31,59,90,120,151,181,212,243,273,304,334];function Ag(o,p){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),p>>>=0,o=new Date(1e3*o),B()[p>>>2>>>0]=o.getSeconds(),B()[p+4>>>2>>>0]=o.getMinutes(),B()[p+8>>>2>>>0]=o.getHours(),B()[p+12>>>2>>>0]=o.getDate(),B()[p+16>>>2>>>0]=o.getMonth(),B()[p+20>>>2>>>0]=o.getFullYear()-1900,B()[p+24>>>2>>>0]=o.getDay();var h=(gf(o.getFullYear())?bf:yf)[o.getMonth()]+o.getDate()-1|0;B()[p+28>>>2>>>0]=h,B()[p+36>>>2>>>0]=-60*o.getTimezoneOffset(),h=new Date(o.getFullYear(),6,1).getTimezoneOffset();var y=new Date(o.getFullYear(),0,1).getTimezoneOffset();o=0|(h!=y&&o.getTimezoneOffset()==Math.min(y,h)),B()[p+32>>>2>>>0]=o}function kg(o){o>>>=0;var p=new Date(B()[o+20>>>2>>>0]+1900,B()[o+16>>>2>>>0],B()[o+12>>>2>>>0],B()[o+8>>>2>>>0],B()[o+4>>>2>>>0],B()[o>>>2>>>0],0),h=B()[o+32>>>2>>>0],y=p.getTimezoneOffset(),$=new Date(p.getFullYear(),6,1).getTimezoneOffset(),k=new Date(p.getFullYear(),0,1).getTimezoneOffset(),R=Math.min(k,$);return 0>h?B()[o+32>>>2>>>0]=+($!=k&&R==y):0<h!=(R==y)&&($=Math.max(k,$),p.setTime(p.getTime()+6e4*((0<h?R:$)-y))),B()[o+24>>>2>>>0]=p.getDay(),h=(gf(p.getFullYear())?bf:yf)[p.getMonth()]+p.getDate()-1|0,B()[o+28>>>2>>>0]=h,B()[o>>>2>>>0]=p.getSeconds(),B()[o+4>>>2>>>0]=p.getMinutes(),B()[o+8>>>2>>>0]=p.getHours(),B()[o+12>>>2>>>0]=p.getDate(),B()[o+16>>>2>>>0]=p.getMonth(),B()[o+20>>>2>>>0]=p.getYear(),o=p.getTime(),BigInt(isNaN(o)?-1:o/1e3)}function _f(o,p,h,y,$,k,R){return u?ye(16,1,o,p,h,y,$,k,R):-52}function wf(o,p,h,y,$,k){if(u)return ye(17,1,o,p,h,y,$,k)}var rr={},Sg=()=>performance.timeOrigin+performance.now();function $f(o,p){if(u)return ye(18,1,o,p);if(rr[o]&&(clearTimeout(rr[o].id),delete rr[o]),!p)return 0;var h=setTimeout(()=>{delete rr[o],Fa(()=>Wf(o,performance.timeOrigin+performance.now()))},p);return rr[o]={id:h,rc:p},0}function Tg(o,p,h,y){o>>>=0,p>>>=0,h>>>=0,y>>>=0;var $=new Date().getFullYear(),k=new Date($,0,1).getTimezoneOffset();$=new Date($,6,1).getTimezoneOffset();var R=Math.max(k,$);ae()[o>>>2>>>0]=60*R,B()[p>>>2>>>0]=+(k!=$),o=(p=W=>{var P=Math.abs(W);return`UTC${0<=W?"-":"+"}${String(Math.floor(P/60)).padStart(2,"0")}${String(P%60).padStart(2,"0")}`})(k),p=p($),$<k?(Ot(o,h,17),Ot(p,y,17)):(Ot(o,y,17),Ot(p,h,17))}var Eg=()=>Date.now();function zg(o,p,h){return 0<=o&&3>=o?(o===0?o=Date.now():o=performance.timeOrigin+performance.now(),V[h>>>0>>>3]=BigInt(Math.round(1e6*o)),0):28}var Xa=[],vf=(o,p)=>{Xa.length=0;for(var h;h=N()[o++>>>0];){var y=h!=105;p+=(y&=h!=112)&&p%8?4:0,Xa.push(h==112?ae()[p>>>2>>>0]:h==106?V[p>>>3]:h==105?B()[p>>>2>>>0]:De()[p>>>3>>>0]),p+=y?8:4}return Xa};function Bg(o,p,h){return o>>>=0,p=vf(p>>>0,h>>>0),Da[o](...p)}function Og(o,p,h){return o>>>=0,p=vf(p>>>0,h>>>0),Da[o](...p)}var Rg=()=>{};function Ng(o,p){return C(Ie(o>>>0,p>>>0))}var Dg=()=>{throw lt+=1,"unwind"};function Wg(){return 4294901760}var Mg=()=>navigator.hardwareConcurrency;function Vg(){return ut("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER"),0}function Gg(o){o>>>=0;var p=N().length;if(o<=p||4294901760<o)return!1;for(var h=1;4>=h;h*=2){var y=p*(1+.2/h);y=Math.min(y,o+100663296);e:{y=(Math.min(4294901760,65536*Math.ceil(Math.max(o,y)/65536))-I.buffer.byteLength+65535)/65536|0;try{I.grow(y),$e();var $=1;break e}catch{}$=void 0}if($)return!0}return!1}var Wr=()=>(ut("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER"),0),ir={},If=o=>{o.forEach(p=>{Wr()})};function Ug(){var o=Error().stack.toString().split(`
`);return o[0]=="Error"&&o.shift(),If(o),ir.Mb=Wr(),ir.dc=o,ir.Mb}function Pg(o,p,h){if(o>>>=0,p>>>=0,ir.Mb==o)var y=ir.dc;else(y=Error().stack.toString().split(`
`))[0]=="Error"&&y.shift(),If(y);for(var $=3;y[$]&&Wr()!=o;)++$;for(o=0;o<h&&y[o+$];++o)B()[p+4*o>>>2>>>0]=Wr();return o}var Ja,Ya={},xf=()=>{if(!Ja){var o,p={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:"./this.program"};for(o in Ya)Ya[o]===void 0?delete p[o]:p[o]=Ya[o];var h=[];for(o in p)h.push(`${o}=${p[o]}`);Ja=h}return Ja};function Cf(o,p){if(u)return ye(19,1,o,p);o>>>=0,p>>>=0;var h=0;return xf().forEach((y,$)=>{var k=p+h;for($=ae()[o+4*$>>>2>>>0]=k,k=0;k<y.length;++k)ue()[$++>>>0]=y.charCodeAt(k);ue()[$>>>0]=0,h+=y.length+1}),0}function Af(o,p){if(u)return ye(20,1,o,p);o>>>=0,p>>>=0;var h=xf();ae()[o>>>2>>>0]=h.length;var y=0;return h.forEach($=>y+=$.length+1),ae()[p>>>2>>>0]=y,0}function kf(o){return u?ye(21,1,o):52}function Sf(o,p,h,y){return u?ye(22,1,o,p,h,y):52}function Tf(o,p,h,y){return u?ye(23,1,o,p,h,y):70}var Lg=[null,[],[]];function Ef(o,p,h,y){if(u)return ye(24,1,o,p,h,y);p>>>=0,h>>>=0,y>>>=0;for(var $=0,k=0;k<h;k++){var R=ae()[p>>>2>>>0],W=ae()[p+4>>>2>>>0];p+=8;for(var P=0;P<W;P++){var K=N()[R+P>>>0],se=Lg[o];K===0||K===10?((o===1?w:C)(Zc(se)),se.length=0):se.push(K)}$+=W}return ae()[y>>>2>>>0]=$,0}u||(function(){for(var o=i.numThreads-1;o--;)Gc();Ma.unshift(()=>{Qt++,(function(p){u?p():Promise.all(dt.map(Vc)).then(p)})(()=>zc())})})();for(var zf=Array(256),Mr=0;256>Mr;++Mr)zf[Mr]=String.fromCharCode(Mr);sf=zf,pt=i.BindingError=class extends Error{constructor(o){super(o),this.name="BindingError"}},i.InternalError=class extends Error{constructor(o){super(o),this.name="InternalError"}},rt.push(0,1,void 0,1,null,1,!0,1,!1,1),i.count_emval_handles=()=>rt.length/2-5-La.length;var Y,Zg=[Va,Nc,Uc,Hc,Fc,Kc,jc,Xc,Jc,Yc,Qc,ef,tf,rf,af,nf,_f,wf,$f,Cf,Af,kf,Sf,Tf,Ef];(async function(){function o(y,$){return Y=y.exports,Y=(function(){var k=Y,R={};for(let[W,P]of Object.entries(k))R[W]=typeof P=="function"?(...K)=>{Rr.push(W);try{return P(...K)}finally{oe||(Rr.pop(),Xe&&ft===1&&Rr.length===0&&(ft=0,lt+=1,Or(Pf),typeof Fibers<"u"&&Fibers.sc()))}}:P;return R})(),Y=(function(){var k=Y,R=P=>K=>P(K)>>>0,W=P=>()=>P()>>>0;return(k=Object.assign({},k)).Ea=R(k.Ea),k.gb=W(k.gb),k.ib=R(k.ib),k.ub=R(k.ub),k.vb=W(k.vb),k.__cxa_get_exception_ptr=R(k.__cxa_get_exception_ptr),k})(),Dc.push(Y.jb),A=$,zc(),Y}Qt++;var p=Bc();if(i.instantiateWasm)return new Promise(y=>{i.instantiateWasm(p,($,k)=>{o($,k),y($.exports)})});if(u)return new Promise(y=>{ve=$=>{var k=new WebAssembly.Instance($,Bc());y(o(k,$))}});Yt??=i.locateFile?i.locateFile?i.locateFile("ort-wasm-simd-threaded.jsep.wasm",_):_+"ort-wasm-simd-threaded.jsep.wasm":new URL(""+new URL("ort-wasm-simd-threaded.jsep-CLPRrI3A.wasm",self.location.href).href,self.location.href).href;try{var h=await(async function(y){var $=Yt;if(!L&&typeof WebAssembly.instantiateStreaming=="function"&&!q($))try{var k=fetch($,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(k,y)}catch(R){C(`wasm streaming compile failed: ${R}`),C("falling back to ArrayBuffer instantiation")}return(async function(R,W){try{var P=await(async function(K){if(!L)try{var se=await f(K);return new Uint8Array(se)}catch{}if(K==Yt&&L)K=new Uint8Array(L);else{if(!m)throw"both async and sync fetching of the wasm failed";K=m(K)}return K})(R);return await WebAssembly.instantiate(P,W)}catch(K){C(`failed to asynchronously prepare wasm: ${K}`),ut(K)}})($,y)})(p);return o(h.instance,h.module)}catch(y){return r(y),Promise.reject(y)}})();var Bf=o=>(Bf=Y.Ea)(o),Of=()=>(Of=Y.Fa)();i._OrtInit=(o,p)=>(i._OrtInit=Y.Ga)(o,p),i._OrtGetLastError=(o,p)=>(i._OrtGetLastError=Y.Ha)(o,p),i._OrtCreateSessionOptions=(o,p,h,y,$,k,R,W,P,K)=>(i._OrtCreateSessionOptions=Y.Ia)(o,p,h,y,$,k,R,W,P,K),i._OrtAppendExecutionProvider=(o,p,h,y,$)=>(i._OrtAppendExecutionProvider=Y.Ja)(o,p,h,y,$),i._OrtAddFreeDimensionOverride=(o,p,h)=>(i._OrtAddFreeDimensionOverride=Y.Ka)(o,p,h),i._OrtAddSessionConfigEntry=(o,p,h)=>(i._OrtAddSessionConfigEntry=Y.La)(o,p,h),i._OrtReleaseSessionOptions=o=>(i._OrtReleaseSessionOptions=Y.Ma)(o),i._OrtCreateSession=(o,p,h)=>(i._OrtCreateSession=Y.Na)(o,p,h),i._OrtReleaseSession=o=>(i._OrtReleaseSession=Y.Oa)(o),i._OrtGetInputOutputCount=(o,p,h)=>(i._OrtGetInputOutputCount=Y.Pa)(o,p,h),i._OrtGetInputOutputMetadata=(o,p,h,y)=>(i._OrtGetInputOutputMetadata=Y.Qa)(o,p,h,y),i._OrtFree=o=>(i._OrtFree=Y.Ra)(o),i._OrtCreateTensor=(o,p,h,y,$,k)=>(i._OrtCreateTensor=Y.Sa)(o,p,h,y,$,k),i._OrtGetTensorData=(o,p,h,y,$)=>(i._OrtGetTensorData=Y.Ta)(o,p,h,y,$),i._OrtReleaseTensor=o=>(i._OrtReleaseTensor=Y.Ua)(o),i._OrtCreateRunOptions=(o,p,h,y)=>(i._OrtCreateRunOptions=Y.Va)(o,p,h,y),i._OrtAddRunConfigEntry=(o,p,h)=>(i._OrtAddRunConfigEntry=Y.Wa)(o,p,h),i._OrtReleaseRunOptions=o=>(i._OrtReleaseRunOptions=Y.Xa)(o),i._OrtCreateBinding=o=>(i._OrtCreateBinding=Y.Ya)(o),i._OrtBindInput=(o,p,h)=>(i._OrtBindInput=Y.Za)(o,p,h),i._OrtBindOutput=(o,p,h,y)=>(i._OrtBindOutput=Y._a)(o,p,h,y),i._OrtClearBoundOutputs=o=>(i._OrtClearBoundOutputs=Y.$a)(o),i._OrtReleaseBinding=o=>(i._OrtReleaseBinding=Y.ab)(o),i._OrtRunWithBinding=(o,p,h,y,$)=>(i._OrtRunWithBinding=Y.bb)(o,p,h,y,$),i._OrtRun=(o,p,h,y,$,k,R,W)=>(i._OrtRun=Y.cb)(o,p,h,y,$,k,R,W),i._OrtEndProfiling=o=>(i._OrtEndProfiling=Y.db)(o),i._JsepOutput=(o,p,h)=>(i._JsepOutput=Y.eb)(o,p,h),i._JsepGetNodeName=o=>(i._JsepGetNodeName=Y.fb)(o);var Vr=()=>(Vr=Y.gb)(),Je=i._free=o=>(Je=i._free=Y.hb)(o),Gr=i._malloc=o=>(Gr=i._malloc=Y.ib)(o),Qa=(o,p,h,y,$,k)=>(Qa=Y.lb)(o,p,h,y,$,k),Rf=()=>(Rf=Y.mb)(),Nf=(o,p,h,y,$)=>(Nf=Y.nb)(o,p,h,y,$),Df=o=>(Df=Y.ob)(o),en=o=>(en=Y.pb)(o),Wf=(o,p)=>(Wf=Y.qb)(o,p),Mf=()=>(Mf=Y.rb)(),Vf=(o,p)=>(Vf=Y.sb)(o,p),Ur=o=>(Ur=Y.tb)(o),tn=o=>(tn=Y.ub)(o),rn=()=>(rn=Y.vb)(),Gf=i.dynCall_ii=(o,p)=>(Gf=i.dynCall_ii=Y.wb)(o,p),Uf=o=>(Uf=Y.xb)(o),Pf=()=>(Pf=Y.yb)(),Lf=o=>(Lf=Y.zb)(o),Zf=()=>(Zf=Y.Ab)();return i.stackSave=()=>rn(),i.stackRestore=o=>Ur(o),i.stackAlloc=o=>tn(o),i.setValue=function(o,p,h="i8"){switch(h.endsWith("*")&&(h="*"),h){case"i1":case"i8":ue()[o>>>0]=p;break;case"i16":G()[o>>>1>>>0]=p;break;case"i32":B()[o>>>2>>>0]=p;break;case"i64":V[o>>>3]=BigInt(p);break;case"float":Te()[o>>>2>>>0]=p;break;case"double":De()[o>>>3>>>0]=p;break;case"*":ae()[o>>>2>>>0]=p;break;default:ut(`invalid type for setValue: ${h}`)}},i.getValue=function(o,p="i8"){switch(p.endsWith("*")&&(p="*"),p){case"i1":case"i8":return ue()[o>>>0];case"i16":return G()[o>>>1>>>0];case"i32":return B()[o>>>2>>>0];case"i64":return V[o>>>3];case"float":return Te()[o>>>2>>>0];case"double":return De()[o>>>3>>>0];case"*":return ae()[o>>>2>>>0];default:ut(`invalid type for getValue: ${p}`)}},i.UTF8ToString=Ie,i.stringToUTF8=Ot,i.lengthBytesUTF8=qc,(function o(){if(0<Qt)er=o;else if(u)t(i),Er();else{for(;0<Ma.length;)Ma.shift()(i);0<Qt?er=o:(i.calledRun=!0,oe||(Er(),t(i)))}})(),i.PTR_SIZE=4,a}),Wn=Qr,Mn=globalThis.self?.name?.startsWith("em-pthread"),Mn&&Qr()}),ei,ti,Vn,Be,Gn,or,Un,Pn,ri,Ln,ii,Zn,ai,Hn,ni=M(()=>{jr(),ei=typeof location>"u"?void 0:location.origin,ti=self.location.href>"file:"&&self.location.href<"file;",Vn=()=>{{if(ti){let e=URL;return new URL(new e("ort.bundle.min.mjs",self.location.href).href,ei).href}return self.location.href}},Be=Vn(),Gn=()=>{if(Be&&!Be.startsWith("blob:"))return Be.substring(0,Be.lastIndexOf("/")+1)},or=(e,t)=>{try{let r=t??Be;return(r?new URL(e,r):new URL(e)).origin===ei}catch{return!1}},Un=(e,t)=>{let r=t??Be;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},Pn=(e,t)=>`${t??"./"}${e}`,ri=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},Ln=async e=>(await import(e)).default,ii=(ch(),Nt(Rn)).default,Zn=async()=>{if(!Be)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(or(Be))return[void 0,ii()];let e=await ri(Be);return[e,ii(e)]},ai=(fh(),Nt(Dn)).default,Hn=async(e,t,r)=>{if(!e&&!t&&ai&&Be&&or(Be))return[void 0,ai];{let i="ort-wasm-simd-threaded.jsep.mjs",a=e??Un(i,t),n=r&&a&&!or(a,t),s=n?await ri(a):a??Pn(i,t);return[n?s:void 0,await Ln(s)]}}}),si,ur,Mt,oi,Fn,qn,Kn,ui,me,mt=M(()=>{ni(),ur=!1,Mt=!1,oi=!1,Fn=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},qn=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Kn=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},ui=async e=>{if(ur)return Promise.resolve();if(Mt)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(oi)throw new Error("previous call to 'initializeWebAssembly()' failed.");Mt=!0;let t=e.initTimeout,r=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!Kn())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!qn())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let i=Fn();r>1&&!i&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let a=e.wasmPaths,n=typeof a=="string"?a:void 0,s=a?.mjs,u=s?.href??s,l=a?.wasm,d=l?.href??l,c=e.wasmBinary,[f,m]=await Hn(u,n,r>1),g=!1,b=[];if(t>0&&b.push(new Promise(_=>{setTimeout(()=>{g=!0,_()},t)})),b.push(new Promise((_,x)=>{let v={numThreads:r};if(c)v.wasmBinary=c;else if(d||n)v.locateFile=w=>d??n+w;else if(u&&u.indexOf("blob:")!==0)v.locateFile=w=>new URL(w,u).href;else if(f){let w=Gn();w&&(v.locateFile=C=>w+C)}m(v).then(w=>{Mt=!1,ur=!0,si=w,_(),f&&URL.revokeObjectURL(f)},w=>{Mt=!1,oi=!0,x(w)})})),await Promise.race(b),g)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},me=()=>{if(ur&&si)return si;throw new Error("WebAssembly is not initialized yet.")}}),Ue,lr,fe,li=M(()=>{mt(),Ue=(e,t)=>{let r=me(),i=r.lengthBytesUTF8(e)+1,a=r._malloc(i);return r.stringToUTF8(e,a,i),t.push(a),a},lr=(e,t,r,i)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([a,n])=>{let s=t?t+a:a;if(typeof n=="object")lr(n,s+".",r,i);else if(typeof n=="string"||typeof n=="number")i(s,n.toString());else if(typeof n=="boolean")i(s,n?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof n}`)})},fe=e=>{let t=me(),r=t.stackSave();try{let i=t.PTR_SIZE,a=t.stackAlloc(2*i);t._OrtGetLastError(a,a+i);let n=Number(t.getValue(a,i===4?"i32":"i64")),s=t.getValue(a+i,"*"),u=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${n}, ERROR_MESSAGE: ${u}`)}finally{t.stackRestore(r)}}}),jn,hh=M(()=>{mt(),li(),jn=e=>{let t=me(),r=0,i=[],a=e||{};try{if(e?.logSeverityLevel===void 0)a.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log serverity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)a.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(a.terminate=!1);let n=0;return e?.tag!==void 0&&(n=Ue(e.tag,i)),r=t._OrtCreateRunOptions(a.logSeverityLevel,a.logVerbosityLevel,!!a.terminate,n),r===0&&fe("Can't create run options."),e?.extra!==void 0&&lr(e.extra,"",new WeakSet,(s,u)=>{let l=Ue(s,i),d=Ue(u,i);t._OrtAddRunConfigEntry(r,l,d)!==0&&fe(`Can't set a run config entry: ${s} - ${u}.`)}),[r,i]}catch(n){throw r!==0&&t._OrtReleaseRunOptions(r),i.forEach(s=>t._free(s)),n}}}),Xn,Jn,Yn,Vt,Qn,es,mh=M(()=>{mt(),li(),Xn=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},Jn=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},Yn=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},Vt=(e,t,r,i)=>{let a=Ue(t,i),n=Ue(r,i);me()._OrtAddSessionConfigEntry(e,a,n)!==0&&fe(`Can't set a session config entry: ${t} - ${r}.`)},Qn=async(e,t,r)=>{for(let i of t){let a=typeof i=="string"?i:i.name,n=[];switch(a){case"webnn":if(a="WEBNN",typeof i!="string"){let c=i?.deviceType;c&&Vt(e,"deviceType",c,r)}break;case"webgpu":if(a="JS",typeof i!="string"){let c=i;if(c?.preferredLayout){if(c.preferredLayout!=="NCHW"&&c.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${c.preferredLayout}`);Vt(e,"preferredLayout",c.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${a}`)}let s=Ue(a,r),u=n.length,l=0,d=0;if(u>0){l=me()._malloc(u*me().PTR_SIZE),r.push(l),d=me()._malloc(u*me().PTR_SIZE),r.push(d);for(let c=0;c<u;c++)me().setValue(l+c*me().PTR_SIZE,n[c][0],"*"),me().setValue(d+c*me().PTR_SIZE,n[c][1],"*")}await me()._OrtAppendExecutionProvider(e,s,l,d,u)!==0&&fe(`Can't append execution provider: ${a}.`)}},es=async e=>{let t=me(),r=0,i=[],a=e||{};Yn(a);try{let n=Xn(a.graphOptimizationLevel??"all"),s=Jn(a.executionMode??"sequential"),u=typeof a.logId=="string"?Ue(a.logId,i):0,l=a.logSeverityLevel??2;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log serverity level is not valid: ${l}`);let d=a.logVerbosityLevel??0;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log verbosity level is not valid: ${d}`);let c=typeof a.optimizedModelFilePath=="string"?Ue(a.optimizedModelFilePath,i):0;if(r=t._OrtCreateSessionOptions(n,!!a.enableCpuMemArena,!!a.enableMemPattern,s,!!a.enableProfiling,0,u,l,d,c),r===0&&fe("Can't create session options."),a.executionProviders&&await Qn(r,a.executionProviders,i),a.enableGraphCapture!==void 0){if(typeof a.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${a.enableGraphCapture}`);Vt(r,"enableGraphCapture",a.enableGraphCapture.toString(),i)}if(a.freeDimensionOverrides)for(let[f,m]of Object.entries(a.freeDimensionOverrides)){if(typeof f!="string")throw new Error(`free dimension override name must be a string: ${f}`);if(typeof m!="number"||!Number.isInteger(m)||m<0)throw new Error(`free dimension override value must be a non-negative integer: ${m}`);let g=Ue(f,i);t._OrtAddFreeDimensionOverride(r,g,m)!==0&&fe(`Can't set a free dimension override: ${f} - ${m}.`)}return a.extra!==void 0&&lr(a.extra,"",new WeakSet,(f,m)=>{Vt(r,f,m,i)}),[r,i]}catch(n){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&fe("Can't release session options."),i.forEach(s=>t._free(s)),n}}}),gt,Ye,bt,dr,pr,di,pi,ci,Q=M(()=>{gt=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},Ye=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},bt=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],i=typeof t=="number"?t:t.reduce((a,n)=>a*n,1);return r>0?Math.ceil(i*r):void 0},dr=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},pr=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},di=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",pi=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",ci=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),fi,ts=M(()=>{jr(),fi=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),i=r?parseInt(r,10):0;if(i<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let a=t.body.getReader(),n;try{n=new ArrayBuffer(i)}catch(u){if(u instanceof RangeError){let l=Math.ceil(i/65536);n=new WebAssembly.Memory({initial:l,maximum:l}).buffer}else throw u}let s=0;for(;;){let{done:u,value:l}=await a.read();if(u)break;let d=l.byteLength;new Uint8Array(n,s,d).set(l),s+=d}return new Uint8Array(n,0,i)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),rs,is,as,ns,hi,ss,le,Qe=M(()=>{Q(),rs=["V","I","W","E","F"],is=(e,t)=>{console.log(`[${rs[e]},${new Date().toISOString()}]${t}`)},hi=(e,t)=>{as=e,ns=t},ss=(e,t)=>{let r=pr(e),i=pr(as);r>=i&&is(r,typeof t=="function"?t():t)},le=(...e)=>{ns&&ss(...e)}}),os,Tt,E,cr,us,ls,ds,re=M(()=>{os=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Tt=class{static calcShape(e,t,r=!1){let i=e.length,a=t.length;if(i===0)return t;if(a===0)return e;let n=Math.max(e.length,t.length),s=new Array(n);if(r){if(i<2||a<2)return;let u=os.calcMatMulShape([e[i-2],e[i-1]],[t[a-2],t[a-1]]);if(u===void 0)return;[s[n-2],s[n-1]]=u}for(let u=r?3:1;u<=n;u++){let l=i-u<0?1:e[i-u],d=a-u<0?1:t[a-u];if(l!==d&&l>1&&d>1)return;let c=Math.max(l,d);if(l&&d)s[n-u]=Math.max(l,d);else{if(c>1)return;s[n-u]=0}}return s}static isValidBroadcast(e,t){let r=e.length,i=t.length;if(r>i)return!1;for(let a=1;a<=r;a++)if(e[r-a]!==1&&e[r-a]!==t[i-a])return!1;return!0}},E=class Pr{static size(t){return Pr.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let i=t.length;if(i===0)return[];let a=new Array(i),n=i-1;for(;n>=0;){if(t[n]%r===0){a[n]=t[n]/r;break}if(r%t[n]!==0)throw new Error("cannot convert shape");a[n]=1,r/=t[n],n--}for(n--;n>=0;n--)a[n]=t[n];return a}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return Pr.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return Pr.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,i){let a=1;for(let n=r;n<i;n++){if(t[n]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");a*=Number(t[n])}return a}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let i=new Array(r);i[r-1]=1,i[r-2]=t[r-1];for(let a=r-3;a>=0;--a)i[a]=i[a+1]*t[a+1];return i}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(i=>this.normalizeAxis(i,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(i=>t[i]):t.slice().reverse()}static padShape(t,r){let i=t.length;return t.map((a,n)=>a+r[n]+r[n+i])}static areEqual(t,r){return t.length!==r.length?!1:t.every((i,a)=>i===r[a])}},cr=class ar{static adjustPoolAttributes(t,r,i,a,n,s){if(!t&&i.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let u=0;u<r.length-2;u++)u>=i.length?i.push(r[u+2]):i[u]=r[u+2];for(let u=0;u<i.length;u++)if(u<a.length){if(a[u]<0)throw new Error("strides should be greater than or equal to 1")}else a.push(1);for(let u=0;u<i.length;u++)if(u<n.length){if(n[u]<0)throw new Error("dilations should be greater than or equal to 1")}else n.push(1);for(let u=0;u<i.length*2;u++)if(u<s.length){if(s[u]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let u=0;u<i.length;u++){if(i[u]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[u]>=i[u]||s[u+i.length]>=i[u])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,i,a,n,s,u){if(u){if(n.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(a.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let l=0;l<t.length-2;l++)ar.adjustPadAndReturnShape(t[l+(s?1:2)],r[l],i[l],a[l],n,l,l+t.length-2,u)}}static computePoolOutputShape(t,r,i,a,n,s,u){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let l=[r[0],r[1]];return ar.computeShapeHelper(t,r,l,i,a,n,s,u),l}static computeConvOutputShape(t,r,i,a,n,s,u){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let l=[t[0],r[0]];return ar.computeShapeHelper(!1,t,l,i,a,n,s,u),l}static computeShapeHelper(t,r,i,a,n,s,u,l){if(t)for(let d=0;d<r.length-2;d++)i.push(1);else for(let d=0;d<r.length-2;d++)i.push(ar.adjustPadAndReturnShape(r[d+2],a[d],n[d],s[d],u,d,d+r.length-2,l))}static adjustPadAndReturnShape(t,r,i,a,n,s,u,l){let d=i*(a-1)+1;if(l&&l!=="NOTSET")switch(l){case"VALID":return n[s]=0,n[u]=0,Math.floor((t-d)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(i!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let c=((t+r-1)/r-1)*r+a-t;return n[s]=Math.floor(l==="SAME_LOWER"?(c+1)/2:c/2),n[u]=c-n[s],Math.floor((t+c-a)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+n[s]+n[u]-d)/r+1)}},us=class{static getShapeOfGemmResult(e,t,r,i,a){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let n,s,u;t?(n=e[1],s=e[0]):(n=e[0],s=e[1]);let l=-1;if(i?(u=r[0],l=1):(u=r[1],l=0),r[l]!==s)throw new Error("dimension mismatch");if(n<=0||u<=0||s<=0)throw new Error("invalid shape specified");if(a&&!Tt.isValidBroadcast(a,[n,u]))throw new Error("gemm: invalid bias shape for broadcast");return[n,u,s]}},ls=-34028234663852886e22,ds=34028234663852886e22}),mi,ps=M(()=>{Q(),mi=(e,t)=>new(dr(t))(e)}),gi,bi,yi,cs,_i,fs,wi,$i,vi,hs,ms,gh=M(()=>{Q(),Qe(),gi=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),bi=(e,t)=>{if(t==="int32")return e;let r=gi.get(t);if(!r)throw new Error(`WebNN backend does not support data type: ${t}`);let i=r/8;if(e.byteLength%i!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${i}.`);let a=e.byteLength/i,n=new(dr(t))(e.buffer,e.byteOffset,a);switch(t){case"int64":case"uint64":{let s=new Int32Array(a);for(let u=0;u<a;u++){let l=n[u];if(l>2147483647n||l<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");s[u]=Number(l)}return new Uint8Array(s.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&n.some(u=>u>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let s=Int32Array.from(n,Number);return new Uint8Array(s.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},yi=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let r=e.byteLength/4,i=new Int32Array(e.buffer,e.byteOffset,r);switch(t){case"int64":{let a=BigInt64Array.from(i,BigInt);return new Uint8Array(a.buffer)}case"uint64":{if(i.some(n=>n<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let a=BigUint64Array.from(i,BigInt);return new Uint8Array(a.buffer)}case"int8":{if(i.some(n=>n<-128||n>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let a=Int8Array.from(i,Number);return new Uint8Array(a.buffer)}case"uint8":{if(i.some(a=>a<0||a>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(i,Number)}case"uint32":{if(i.some(n=>n<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let a=Uint32Array.from(i,Number);return new Uint8Array(a.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},cs=1,_i=()=>cs++,fs=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),wi=(e,t)=>{let r=gi.get(e);if(!r)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((i,a)=>i*a)*r/8):0},$i=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:r,tensor:i,dataType:a,shape:n,fallbackDataType:s}=e;this.sessionId=t,this.mlContext=r,this.mlTensor=i,this.dataType=a,this.tensorShape=n,this.fallbackDataType=s}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return wi(this.dataType,this.tensorShape)}destroy(){le("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),r=yi(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(r);return}else return r.buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((i,a)=>i===r[a])}setIsDataConverted(e){this.isDataConverted=e}},vi=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,i){let a=this.tensorManager.getMLContext(e),n;if(!a.opSupportLimits().input.dataTypes.includes(t)){if(n=fs.get(t),!n||!a.opSupportLimits().input.dataTypes.includes(n))throw new Error(`WebNN backend does not support data type: ${t}`);le("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${n}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(a,t,r))return this.wrapper.tensor;if(i){if(this.wrapper.byteLength!==wi(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let s=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,s,!0,!0,n),i&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=bi(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else le("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){if(this.activeUpload){let t=this.wrapper?.isDataConverted?yi(this.activeUpload,this.wrapper?.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(t):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(t);return}else return t.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},hs=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}reserveTensorId(){let e=_i();return this.tensorTrackersById.set(e,new vi(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,i,a){le("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${i}, copyOld: ${a}}`);let n=this.tensorTrackersById.get(t);if(!n)throw new Error("Tensor not found.");return n.ensureTensor(e,r,i,a)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){le("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,i){let a=this.getMLContext(e),n=_i(),s=new $i({sessionId:e,context:a,tensor:t,dataType:r,shape:i});return this.tensorTrackersById.set(n,new vi(this,s)),this.externalTensors.add(s),n}async getCachedTensor(e,t,r,i,a,n,s){let u=this.getMLContext(e);for(let[d,c]of this.freeTensors.entries())if(c.canReuseTensor(u,t,r)){le("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}`);let f=this.freeTensors.splice(d,1)[0];return f.sessionId=e,f}le("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}}`);let l=await u.createTensor({dataType:s??t,shape:r,dimensions:r,usage:i,writable:a,readable:n});return new $i({sessionId:e,context:u,tensor:l,dataType:t,shape:r,fallbackDataType:s})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},ms=(...e)=>new hs(...e)}),Gt,gs,bs,bh=M(()=>{Q(),mt(),ps(),gh(),Qe(),Gt=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),gs=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),i=Object.keys(t).sort();return r.length===i.length&&r.every((a,n)=>a===i[n]&&e[a]===t[a])},bs=class{constructor(e){this.tensorManager=ms(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,hi(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){le("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){le("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)le("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(i=>i.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:i}),i}}else if(e===void 0){let r=this.mlContextCache.findIndex(i=>i.options===void 0&&i.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:i}),i}}let t=this.mlContextCache.findIndex(r=>gs(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let i=this.mlContextCache.findIndex(a=>a.mlContext===t);i!==-1&&this.mlContextCache.splice(i,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){le("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,i,a){let n=Gt.get(r);if(!n)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,n,i,a)}async createTemporaryTensor(e,t,r){le("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let i=Gt.get(t);if(!i)throw new Error(`Unsupported ONNX data type: ${t}`);let a=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,a,i,r,!1);let n=this.temporarySessionTensorIds.get(e);return n?n.push(a):this.temporarySessionTensorIds.set(e,[a]),a}uploadTensor(e,t){if(!me().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");le("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return mi(r,t)}}registerMLTensor(e,t,r,i){let a=Gt.get(r);if(!a)throw new Error(`Unsupported ONNX data type: ${r}`);let n=this.tensorManager.registerTensor(e,t,a,i);return le("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${a}, dimensions: ${i}} -> {tensorId: ${n}}`),n}registerMLConstant(e,t,r,i,a,n,s=!1){if(!n)throw new Error("External mounted files are not available.");let u=e;e.startsWith("./")&&(u=e.substring(2));let l=n.get(u);if(!l)throw new Error(`File with name ${u} not found in preloaded files.`);if(t+r>l.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let d=l.slice(t,t+r).buffer,c;switch(a.dataType){case"float32":c=new Float32Array(d);break;case"float16":c=typeof Float16Array<"u"&&Float16Array.from?new Float16Array(d):new Uint16Array(d);break;case"int32":c=new Int32Array(d);break;case"uint32":c=new Uint32Array(d);break;case"int64":if(s){let f=bi(new Uint8Array(d),"int64");c=new Int32Array(f.buffer),a.dataType="int32"}else c=new BigInt64Array(d);break;case"uint64":c=new BigUint64Array(d);break;case"int8":c=new Int8Array(d);break;case"int4":case"uint4":case"uint8":c=new Uint8Array(d);break;default:throw new Error(`Unsupported data type: ${a.dataType} in creating WebNN Constant from external data.`)}return le("verbose",()=>`[WebNN] registerMLConstant {dataType: ${a.dataType}, shape: ${a.shape}}} ${s?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),i.constant(a,c)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}isGraphOutput(e,t){let r=this.sessionGraphOutputs.get(e);return r?r.includes(t):!1}isGraphInputOutputTypeSupported(e,t,r=!0){let i=this.mlContextBySessionId.get(e),a=Gt.get(gt(t));return typeof a>"u"?!1:r?!!i?.opSupportLimits().input.dataTypes.includes(a):!!i?.opSupportLimits().output.dataTypes.includes(a)}flush(){}}}),Ii=M(()=>{}),xi,fr,hr,ys,_s,Ci,Ai,ws,$s,yh=M(()=>{Qe(),Ii(),xi=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),fr=[],hr=e=>Math.ceil(Number(e)/16)*16,ys=e=>{for(let t=0;t<fr.length;t++){let r=fr[t];if(e<=r)return r}return Math.ceil(e/16)*16},_s=1,Ci=()=>_s++,Ai=async(e,t,r,i)=>{let a=hr(r),n=e.device.createBuffer({size:a,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,n,0,a),e.flush(),await n.mapAsync(GPUMapMode.READ);let u=n.getMappedRange();if(i){let l=i();return l.set(new Uint8Array(u,0,r)),l}else return new Uint8Array(u.slice(0,r))}finally{n.destroy()}},ws=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of xi)fr.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,i=t.byteOffset,a=t.byteLength,n=hr(a),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==a)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${a}`);let u=this.backend.device.createBuffer({mappedAtCreation:!0,size:n,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),l=u.getMappedRange();new Uint8Array(l).set(new Uint8Array(r,i,a)),u.unmap();let d=this.backend.device.createCommandEncoder();d.copyBufferToBuffer(u,0,s.gpuData.buffer,0,n),this.backend.device.queue.submit([d.finish()]),u.destroy(),le("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let i=this.storageCache.get(t);if(!i)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==i.originalSize)throw new Error("inconsistent source and destination gpu data size");let a=hr(r.originalSize),n=this.backend.getCommandEncoder();this.backend.endComputePass(),n.copyBufferToBuffer(r.gpuData.buffer,0,i.gpuData.buffer,0,a)}registerExternalBuffer(e,t,r){let i;if(r){if(i=r[0],e===r[1])return le("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, buffer is the same, skip.`),i;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else i=Ci();return this.storageCache.set(i,{gpuData:{id:i,type:0,buffer:e},originalSize:t}),le("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, registered.`),i}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),le("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=ys(e),i,a=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,n=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(a||n){let u=(a?this.freeBuffers:this.freeUniformBuffers).get(r);u?u.length>0?i=u.pop():i=this.backend.device.createBuffer({size:r,usage:t}):i=this.backend.device.createBuffer({size:r,usage:t})}else i=this.backend.device.createBuffer({size:r,usage:t});let s={id:Ci(),type:0,buffer:i};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),le("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){return this.storageCache.get(e)?.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return le("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await Ai(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=xi.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(le("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},$s=(...e)=>new ws(...e)}),vs,ce,we=M(()=>{vs=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},ce=e=>new vs(e)}),Et,mr,xe,ke,j,_e,ki,zt,at,F,Ut,O,H,Is,Si,xs,Cs,ne=M(()=>{Q(),re(),Et=64,mr=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},xe=(e,t=1)=>{let r=mr(e,t);return typeof r=="string"?r:r[0]},ke=(e,t=1)=>{let r=mr(e,t);return typeof r=="string"?r:r[1]},j=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:E.computeStrides(r)})}),t},_e=e=>e%4===0?4:e%2===0?2:1,ki=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,zt=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,at=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,F=(e,t,r,i)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?i==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:i==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,Ut=(e,t,r,i,a)=>{let n=typeof r=="number",s=n?r:r.length,u=[...new Array(s).keys()],l=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,d=mr(t,a),c=typeof d=="string"?d:d[1],f=typeof d=="string"?d:d[0],m={indices:l,value:c,storage:f,tensor:t},g=N=>typeof N=="string"?N:`${N}u`,b={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},_=n?"uniforms.":"",x=`${_}${e}_shape`,v=`${_}${e}_strides`,w="";for(let N=0;N<s-1;N++)w+=`
    let dim${N} = current / ${F(v,N,s)};
    let rest${N} = current % ${F(v,N,s)};
    indices[${N}] = dim${N};
    current = rest${N};
    `;w+=`indices[${s-1}] = current;`;let C=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${m.indices} {
    var indices: ${m.indices};
    var current = offset;
    ${w}
    return indices;
  }`,I=N=>(b.offsetToIndices=!0,s<2?N:`o2i_${e}(${N})`),A=[];if(s>=2)for(let N=s-1;N>=0;N--)A.push(`${F(v,N,s)} * (indices[${N}])`);let T=s<2?"":`
  fn i2o_${e}(indices: ${m.indices}) -> u32 {
    return ${A.join("+")};
  }`,S=N=>(b.indicesToOffset=!0,s<2?N:`i2o_${e}(${N})`),z=(...N)=>s===0?"0u":`${m.indices}(${N.map(g).join(",")})`,D=(N,G)=>s<2?`${N}`:`${F(N,G,s)}`,U=(N,G,te)=>s<2?`${N}=${te};`:`${F(N,G,s)}=${te};`,X={},Z=(N,G)=>{b.broadcastedIndicesToOffset=!0;let te=`${G.name}broadcastedIndicesTo${e}Offset`;if(te in X)return`${te}(${N})`;let B=[];for(let ae=s-1;ae>=0;ae--){let Te=G.indicesGet("outputIndices",ae+G.rank-s);B.push(`${D(v,ae)} * (${Te} % ${D(x,ae)})`)}return X[te]=`fn ${te}(outputIndices: ${G.type.indices}) -> u32 {
             return ${B.length>0?B.join("+"):"0u"};
           }`,`${te}(${N})`},ee=(N,G)=>(()=>{if(m.storage===m.value)return`${e}[${N}]=${G};`;if(m.storage==="vec2<u32>"&&m.value==="i32")return`${e}[${N}]=vec2<u32>(u32(${G}), select(0u, 0xFFFFFFFFu, ${G} < 0));`;if(m.storage==="vec2<u32>"&&m.value==="u32")return`${e}[${N}]=vec2<u32>(u32(${G}), 0u);`;if(m.storage==="u32"&&m.value==="vec4<bool>")return`${e}[${N}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${G}));`;throw new Error(`not supported combination of storage type ${m.storage} and value type ${m.value} yet`)})(),V=N=>(()=>{if(m.storage===m.value)return`${e}[${N}]`;if(m.storage==="vec2<u32>"&&m.value==="i32")return`i32(${e}[${N}].x)`;if(m.storage==="vec2<u32>"&&m.value==="u32")return`u32(${e}[${N}].x)`;if(m.storage==="u32"&&m.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${N}] & 0xFFu), bool(${e}[${N}] & 0xFF00u), bool(${e}[${N}] & 0xFF0000u), bool(${e}[${N}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${m.storage} and value type ${m.value} yet`)})(),ie=s<2?"":`
  fn get_${e}ByIndices(indices: ${m.indices}) -> ${c} {
    return ${V(`i2o_${e}(indices)`)};
  }`,J=s<2?"":(()=>{let N=u.map(te=>`d${te}: u32`).join(", "),G=u.map(te=>`d${te}`).join(", ");return`
  fn get_${e}(${N}) -> ${c} {
    return get_${e}ByIndices(${z(G)});
  }`})(),L=(...N)=>{if(N.length!==s)throw new Error(`indices length must be ${s}`);let G=N.map(g).join(",");return s===0?V("0u"):s===1?V(G[0]):(b.get=!0,b.getByIndices=!0,b.indicesToOffset=!0,`get_${e}(${G})`)},oe=N=>s<2?V(N):(b.getByIndices=!0,b.indicesToOffset=!0,`get_${e}ByIndices(${N})`),q=s<2?"":`
  fn set_${e}ByIndices(indices: ${m.indices}, value: ${c}) {
    ${ee(`i2o_${e}(indices)`,"value")}
  }`,ue=s<2?"":(()=>{let N=u.map(te=>`d${te}: u32`).join(", "),G=u.map(te=>`d${te}`).join(", ");return`
  fn set_${e}(${N}, value: ${c}) {
    set_${e}ByIndices(${z(G)}, value);
  }`})();return{impl:()=>{let N=[],G=!1;return b.offsetToIndices&&(N.push(C),G=!0),b.indicesToOffset&&(N.push(T),G=!0),b.broadcastedIndicesToOffset&&(Object.values(X).forEach(te=>N.push(te)),G=!0),b.set&&(N.push(ue),G=!0),b.setByIndices&&(N.push(q),G=!0),b.get&&(N.push(J),G=!0),b.getByIndices&&(N.push(ie),G=!0),!n&&G&&N.unshift(`const ${x} = ${m.indices}(${r.join(",")});`,`const ${v} = ${m.indices}(${E.computeStrides(r).join(",")});`),N.join(`
`)},type:m,offsetToIndices:I,indicesToOffset:S,broadcastedIndicesToOffset:Z,indices:z,indicesGet:D,indicesSet:U,set:(...N)=>{if(N.length!==s+1)throw new Error(`indices length must be ${s}`);let G=N[s];if(typeof G!="string")throw new Error("value must be string");let te=N.slice(0,s).map(g).join(",");return s===0?ee("0u",G):s===1?ee(te[0],G):(b.set=!0,b.setByIndices=!0,b.indicesToOffset=!0,`set_${e}(${te}, ${G})`)},setByOffset:ee,setByIndices:(N,G)=>s<2?ee(N,G):(b.setByIndices=!0,b.indicesToOffset=!0,`set_${e}ByIndices(${N}, ${G});`),get:L,getByOffset:V,getByIndices:oe,usage:i,name:e,strides:v,shape:x,rank:s}},O=(e,t,r,i=1)=>Ut(e,t,r,"input",i),H=(e,t,r,i=1)=>Ut(e,t,r,"output",i),Is=(e,t,r)=>Ut(e,t,r,"atomicOutput",1),Si=(e,t,r,i=1)=>Ut(e,t,r,"internal",i),xs=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Et){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],i=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||i>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*i>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let a=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,n=a?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,s=a?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*i}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${i})
  fn main(${n}) {
    ${s}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",i=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${i}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:i}of this.uniforms)if(i&&i>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(i/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(i/4)}>`);else{let a=i==null||i===1?r:`vec${i}<${r}>`;e.push(`${t}:${a}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Cs=(e,t)=>new xs(e,t)}),As,Ti,ks,Ss,Ts,Es,Oe,zs,Bs,nt=M(()=>{Q(),re(),we(),ne(),As=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},Ti=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),ks=(e,t)=>E.sortBasedOnPerm(e,Ti(e.length,t)),Ss=(e,t,r,i)=>{let a=`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let n=0;n<t;++n)a+=`a[${e[n]}]=i[${n}];`;return a+="return a;}"},Ts=(e,t)=>{let r=[],i=[];for(let a=0;a<e.length;++a)e[a]!==1&&r.push(e[a]),e[t[a]]!==1&&i.push(t[a]);return{newShape:r,newPerm:i}},Es=(e,t)=>{let r=0;for(let i=0;i<e.length;++i)if(t[e[i]]!==1){if(e[i]<r)return!1;r=e[i]}return!0},Oe=(e,t)=>{let r=e.dataType,i=e.dims.length,a=Ti(i,t),n=ks(e.dims,a),s=e.dims,u=n,l=i<2||Es(a,e.dims),d;if(l)return d=b=>{let _=O("input",r,s,4),x=H("output",r,u,4);return`
  ${b.registerUniform("output_size","u32").declareVariables(_,x)}
  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let b=E.size(n);return{outputs:[{dims:n,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(b/64/4)},programUniforms:[{type:12,data:Math.ceil(b/4)}]}},getShaderSource:d};let{newShape:c,newPerm:f}=Ts(e.dims,a),m=E.areEqual(f,[2,3,1]),g=E.areEqual(f,[3,1,2]);if(c.length===2||m||g){s=m?[c[0],c[1]*c[2]]:g?[c[0]*c[1],c[2]]:c,u=[s[1],s[0]];let b=16;return d=_=>{let x=O("a",r,s.length),v=H("output",r,u.length);return`
  ${_.registerUniform("output_size","u32").declareVariables(x,v)}
  var<workgroup> tile : array<array<${v.type.value}, ${b+1}>, ${b}>;
  ${_.mainStart([b,b,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${b} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${b}u + local_id.x;
    let input_row = workgroup_id_x * ${b}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${x.getByIndices(`${x.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${b}u + local_id.x;
    let output_row = workgroup_id_y * ${b}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${v.setByIndices(`${v.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let _=E.size(n);return{outputs:[{dims:n,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(u[1]/b),y:Math.ceil(u[0]/b)},programUniforms:[{type:12,data:_},...j(s,u)]}},getShaderSource:d}}return d=b=>{let _=O("a",r,s.length),x=H("output",r,u.length);return`
  ${b.registerUniform("output_size","u32").declareVariables(_,x)}

  ${Ss(a,i,_,x)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${x.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${x.setByOffset("global_idx",_.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let b=E.size(n);return{outputs:[{dims:n,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(b/64)},programUniforms:[{type:12,data:b},...j(s,u)]}},getShaderSource:d}},zs=(e,t)=>{As(e.inputs,t.perm),e.compute(Oe(e.inputs[0],t.perm))},Bs=e=>ce({perm:e.perm})}),Os,Rs,Ns,Ds,Ws,Ms,Vs,Gs,Us,Ps,Pe,Ls,Zs,Hs,Fs,qs,Ks,js,Xs,Js,Ys,_h=M(()=>{Q(),re(),ne(),zi(),nt(),Os={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Rs={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Ns={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Ds={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Ws=(e,t)=>{let r=[];for(let i=t-e;i<t;++i)r.push(i);return r},Ms=(e,t)=>{let r=[],i=e.length;for(let n=0;n<i;n++)t.indexOf(n)===-1&&r.push(e[n]);let a=t.map(n=>e[n]);return[r,a]},Vs=(e,t)=>{let r=e.length+t.length,i=[],a=0;for(let n=0;n<r;n++)t.indexOf(n)===-1?i.push(e[a++]):i.push(1);return i},Gs=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},Us=(e,t)=>{let r=[];if(!Gs(e,t)){for(let i=0;i<t;++i)e.indexOf(i)===-1&&r.push(i);e.forEach(i=>r.push(i))}return r},Ps=(e,t,r,i,a,n,s)=>{let u=r[0].dims,l=E.size(n),d=E.size(s),c=O("_A",r[0].dataType,u),f=H("output",a,n),m=64;l===1&&(m=256);let g=`
          var<workgroup> aBestValues : array<f32, ${m}>;
       `,b=_=>`
        ${_.registerUniform("reduceSize","u32").declareVariables(c,f)}
        ${g}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${_.mainStart(m)}

          let outputIndex = global_idx / ${m};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Ns[i]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${m}) {
           let candidate = f32(${c.getByOffset("offset + k")});
           bestValue = ${Os[i]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${m}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Rs[i]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${f.setByOffset("outputIndex",`${i==="mean"?`${f.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${f.type.storage}(${Ds[i]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${m}`,inputDependencies:["type"]},getShaderSource:b,getRunData:()=>({outputs:[{dims:n,dataType:a}],dispatchGroup:{x:l},programUniforms:[{type:12,data:d}]})}},Pe=(e,t,r,i)=>{let a=e.inputs.length===1?r:Ei(e.inputs,r),n=a.axes;n.length===0&&!a.noopWithEmptyAxes&&(n=e.inputs[0].dims.map((g,b)=>b));let s=E.normalizeAxes(n,e.inputs[0].dims.length),u=s,l=e.inputs[0],d=Us(u,e.inputs[0].dims.length);d.length>0&&(l=e.compute(Oe(e.inputs[0],d),{inputs:[0],outputs:[-1]})[0],u=Ws(u.length,l.dims.length));let[c,f]=Ms(l.dims,u),m=c;a.keepDims&&(m=Vs(c,s)),e.compute(Ps(t,a.cacheKey,[l],i,e.inputs[0].dataType,m,f),{inputs:[l]})},Ls=(e,t)=>{Pe(e,"ReduceMeanShared",t,"mean")},Zs=(e,t)=>{Pe(e,"ReduceL1Shared",t,"l1")},Hs=(e,t)=>{Pe(e,"ReduceL2Shared",t,"l2")},Fs=(e,t)=>{Pe(e,"ReduceLogSumExpShared",t,"logSumExp")},qs=(e,t)=>{Pe(e,"ReduceMaxShared",t,"max")},Ks=(e,t)=>{Pe(e,"ReduceMinShared",t,"min")},js=(e,t)=>{Pe(e,"ReduceProdShared",t,"prod")},Xs=(e,t)=>{Pe(e,"ReduceSumShared",t,"sum")},Js=(e,t)=>{Pe(e,"ReduceSumSquareShared",t,"sumSquare")},Ys=(e,t)=>{Pe(e,"ReduceLogSumShared",t,"logSum")}}),Le,Qs,gr,Ei,Ze,eo,to,ro,io,ao,no,so,oo,uo,lo,He,po,co,fo,ho,mo,go,bo,yo,_o,wo,zi=M(()=>{Q(),re(),we(),ne(),_h(),Le=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Qs=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],gr=(e,t,r,i,a,n,s=!1,u=!1)=>{let l=[],d=r[0].dims,c=d.length,f=E.normalizeAxes(a,c),m=!u&&f.length===0;d.forEach((_,x)=>{m||f.indexOf(x)>=0?s&&l.push(1):l.push(_)});let g=l.length,b=E.size(l);return{name:e,shaderCache:t,getShaderSource:_=>{let x=[],v=O("_A",r[0].dataType,c),w=H("output",n,g),C=i(v,w,f),I=C[2];for(let A=0,T=0;A<c;A++)m||f.indexOf(A)>=0?(s&&T++,I=`for(var j${A}: u32 = 0; j${A} < ${d[A]}; j${A}++) {
                  ${C[2].includes("last_index")?`let last_index = j${A};`:""}
                  ${v.indicesSet("input_indices",A,`j${A}`)}
                  ${I}
                }`):(x.push(`${v.indicesSet("input_indices",A,w.indicesGet("output_indices",T))};`),T++);return`

        ${_.registerUniform("output_size","u32").declareVariables(v,w)}

        ${_.mainStart()}
          ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${v.type.indices};
          let output_indices = ${w.offsetToIndices("global_idx")};

          ${x.join(`
`)}
          ${C[0]}       // init ops for reduce max/min
          ${C[1]}
          ${I}
          ${C[3]}
          ${C.length===4?w.setByOffset("global_idx","value"):C.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:l,dataType:n}],dispatchGroup:{x:Math.ceil(b/64)},programUniforms:[{type:12,data:b},...j(d,l)]})}},Ei=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),ce({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Ze=(e,t,r,i)=>{let a=e.inputs,n=a.length===1?r:Ei(a,r);e.compute(gr(t,{hint:n.cacheKey,inputDependencies:["rank"]},[a[0]],n.noopWithEmptyAxes&&n.axes.length===0?Qs:i,n.axes,a[0].dataType,n.keepDims,n.noopWithEmptyAxes),{inputs:[0]})},eo=(e,t)=>{Le(e.inputs),Ze(e,"ReduceLogSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},to=(e,t)=>{Le(e.inputs),Ze(e,"ReduceL1",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},ro=(e,t)=>{Le(e.inputs),Ze(e,"ReduceL2",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},io=(e,t)=>{Le(e.inputs),Ze(e,"ReduceLogSumExp",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},ao=(e,t)=>{Le(e.inputs),Ze(e,"ReduceMax",t,(r,i,a)=>{let n=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&n.push(r.indicesSet("input_indices",s,0));return[`${n.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},no=(e,t)=>{Le(e.inputs),Ze(e,"ReduceMean",t,(r,i,a)=>{let n=1;for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&(n*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${i.type.value}(sum / ${n});`]})},so=(e,t)=>{Le(e.inputs),Ze(e,"ReduceMin",t,(r,i,a)=>{let n=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&n.push(`input_indices[${s}] = 0;`);return[`${n.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},oo=(e,t)=>{Le(e.inputs),Ze(e,"ReduceProd",t,(r,i)=>[`var value = ${i.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},uo=(e,t)=>{Le(e.inputs),Ze(e,"ReduceSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},lo=(e,t)=>{Le(e.inputs),Ze(e,"ReduceSumSquare",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},He=(e,t,r)=>{if(t.length===0)return r;let i=1,a=1;for(let n=0;n<t.length;n++)t.indexOf(n)===-1?i*=e[n]:a*=e[n];return a<32&&i>1024},po=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?no(e,t):Ls(e,t)},co=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?to(e,t):Zs(e,t)},fo=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ro(e,t):Hs(e,t)},ho=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?io(e,t):Fs(e,t)},mo=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ao(e,t):qs(e,t)},go=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?so(e,t):Ks(e,t)},bo=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?oo(e,t):js(e,t)},yo=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?uo(e,t):Xs(e,t)},_o=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?lo(e,t):Js(e,t)},wo=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?eo(e,t):Ys(e,t)}}),Bi,$o,vo,Oi,wh=M(()=>{Q(),we(),zi(),Bi=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},$o=(e,t)=>{Bi(e.inputs);let r=(i,a,n)=>{let s=[];for(let u=0;u<i.rank;u++)(n.indexOf(u)>=0||n.length===0)&&s.push(`input_indices[${u}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(gr("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},vo=(e,t)=>{Bi(e.inputs);let r=(i,a,n)=>{let s=[];for(let u=0;u<i.rank;u++)(n.indexOf(u)>=0||n.length===0)&&s.push(`input_indices[${u}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(gr("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Oi=e=>ce(e)}),Io,br,xo,Co,Ao,Pt,ko,So,Ri=M(()=>{Q(),re(),Ii(),ne(),Io=(e,t)=>{let r=e[0],i=e[1],a=e[2],n=e[3],s=e[4],u=e[5];if(s&&u)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let l=r.dims[0],d=r.dims[1],c=r.dims[2];if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(i.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(i.dims[0]!==c)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(a.dims[0]!==i.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let f=a.dims[0]/3,m=f,g=m;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let C of t.qkvHiddenSizes)if(C%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");f=t.qkvHiddenSizes[0],m=t.qkvHiddenSizes[1],g=t.qkvHiddenSizes[2]}let b=d;if(f!==m)throw new Error("qkv_hidden_sizes first element should be same as the second");if(a.dims[0]!==f+m+g)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let _=0;if(s){if(m!==g)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==l)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==m/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(_=s.dims[3])}let x=b+_,v=-1,w=0;if(n)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(u){if(u.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(u.dims[0]!==l||u.dims[1]!==t.numHeads||u.dims[2]!==d||u.dims[3]!==x)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:l,sequenceLength:d,pastSequenceLength:_,kvSequenceLength:b,totalSequenceLength:x,maxSequenceLength:v,inputHiddenSize:c,hiddenSize:f,vHiddenSize:g,headSize:Math.floor(f/t.numHeads),vHeadSize:Math.floor(g/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:w,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},br=(e,t,r)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e?.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,xo=(e,t,r,i,a,n,s,u)=>{let l=_e(s?1:n),d=64,c=n/l;c<d&&(d=32);let f=Math.ceil(n/l/d),m=[{type:12,data:t},{type:12,data:r},{type:12,data:i},{type:12,data:a},{type:12,data:c},{type:12,data:f}],g=xe(e.dataType,l),b=ke(1,l),_=["type"];s&&_.push("type"),u&&_.push("type");let x=v=>{let w=H("x",e.dataType,e.dims,l),C=[w],I=s?O("seq_lens",s.dataType,s.dims):void 0;I&&C.push(I);let A=u?O("total_sequence_length_input",u.dataType,u.dims):void 0;A&&C.push(A);let T=ke(e.dataType),S=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${d}>;
  var<workgroup> thread_sum: array<f32, ${d}>;
  ${v.registerUniforms(S).declareVariables(...C)}
  ${v.mainStart([d,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${br(I,A,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${d}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${s?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${b}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${b}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(l){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${d}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${b}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${b}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(l){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${d}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${w.type.value}(${T}(1.0) / ${T}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${b}(x[offset + i]);
        x[offset + i] = ${w.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${s?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${w.type.value}(${T}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${d};${g};${l}`,inputDependencies:_},getShaderSource:x,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:a,z:t*r},programUniforms:m})}},Co=(e,t,r,i,a,n,s,u,l)=>{let d=s+n.kvSequenceLength,c=[n.batchSize,n.numHeads,n.sequenceLength,d],f=e>1&&i,m=n.kvNumHeads?n.kvNumHeads:n.numHeads,g=f?[n.batchSize,m,d,n.headSize]:void 0,b=n.nReps?n.nReps:1,_=n.scale===0?1/Math.sqrt(n.headSize):n.scale,x=_e(n.headSize),v=n.headSize/x,w=12,C={x:Math.ceil(d/w),y:Math.ceil(n.sequenceLength/w),z:n.batchSize*n.numHeads},I=[{type:12,data:n.sequenceLength},{type:12,data:v},{type:12,data:d},{type:12,data:n.numHeads},{type:12,data:n.headSize},{type:1,data:_},{type:12,data:s},{type:12,data:n.kvSequenceLength},{type:12,data:b}],A=f&&i&&E.size(i.dims)>0,T=["type","type"];A&&T.push("type"),a&&T.push("type"),u&&T.push("type"),l&&T.push("type");let S=[{dims:c,dataType:t.dataType,gpuDataType:0}];f&&S.push({dims:g,dataType:t.dataType,gpuDataType:0});let z=D=>{let U=O("q",t.dataType,t.dims,x),X=O("key",r.dataType,r.dims,x),Z=[U,X];if(A){let q=O("past_key",i.dataType,i.dims,x);Z.push(q)}a&&Z.push(O("attention_bias",a.dataType,a.dims));let ee=u?O("seq_lens",u.dataType,u.dims):void 0;ee&&Z.push(ee);let V=l?O("total_sequence_length_input",l.dataType,l.dims):void 0;V&&Z.push(V);let ie=H("output",t.dataType,c),J=[ie];f&&J.push(H("present_key",t.dataType,g,x));let L=ke(1,x),oe=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${w}u;

  var<workgroup> tileQ: array<${U.type.storage}, ${w*w}>;
  var<workgroup> tileK: array<${U.type.storage}, ${w*w}>;
  ${D.registerUniforms(oe).declareVariables(...Z,...J)}
  ${D.mainStart([w,w,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${b===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${b===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${br(ee,V,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${A&&f?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${f?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${L}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${A&&f?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${f?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${L}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(x){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${x}`)}})()};
        output[outputIdx] = ${ie.type.value} (sum * uniforms.alpha) + ${a?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${x};${a!==void 0};${i!==void 0};${e}`,inputDependencies:T},getRunData:()=>({outputs:S,dispatchGroup:C,programUniforms:I}),getShaderSource:z}},Ao=(e,t,r,i,a,n,s=void 0,u=void 0)=>{let l=n+a.kvSequenceLength,d=a.nReps?a.nReps:1,c=a.vHiddenSize*d,f=e>1&&i,m=a.kvNumHeads?a.kvNumHeads:a.numHeads,g=f?[a.batchSize,m,l,a.headSize]:void 0,b=[a.batchSize,a.sequenceLength,c],_=12,x={x:Math.ceil(a.vHeadSize/_),y:Math.ceil(a.sequenceLength/_),z:a.batchSize*a.numHeads},v=[{type:12,data:a.sequenceLength},{type:12,data:l},{type:12,data:a.vHeadSize},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:12,data:c},{type:12,data:n},{type:12,data:a.kvSequenceLength},{type:12,data:d}],w=f&&i&&E.size(i.dims)>0,C=["type","type"];w&&C.push("type"),s&&C.push("type"),u&&C.push("type");let I=[{dims:b,dataType:t.dataType,gpuDataType:0}];f&&I.push({dims:g,dataType:t.dataType,gpuDataType:0});let A=T=>{let S=O("probs",t.dataType,t.dims),z=O("v",r.dataType,r.dims),D=[S,z];w&&D.push(O("past_value",i.dataType,i.dims));let U=s?O("seq_lens",s.dataType,s.dims):void 0;s&&D.push(U);let X=u?O("total_sequence_length_input",u.dataType,u.dims):void 0;u&&D.push(X);let Z=[H("output",t.dataType,b)];f&&Z.push(H("present_value",t.dataType,g));let ee=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${_}u;
  var<workgroup> tileQ: array<${S.type.value}, ${_*_}>;
  var<workgroup> tileV: array<${S.type.value}, ${_*_}>;
  ${T.registerUniforms(ee).declareVariables(...D,...Z)}
  ${T.mainStart([_,_,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${d===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${d===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${br(U,X,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${w&&f?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${f?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${S.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${w&&f?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${f?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${i!==void 0};${e}`,inputDependencies:C},getRunData:()=>({outputs:I,dispatchGroup:x,programUniforms:v}),getShaderSource:A}},Pt=(e,t,r,i,a,n,s,u,l,d,c=void 0,f=void 0)=>{let m=Math.min(e.outputCount,1+(s?1:0)+(u?1:0)),g=m>1?d.pastSequenceLength:0,b=g+d.kvSequenceLength,_=l&&E.size(l.dims)>0?l:void 0,x=[t,r];m>1&&s&&E.size(s.dims)>0&&x.push(s),_&&x.push(_),c&&x.push(c),f&&x.push(f);let v=e.compute(Co(m,t,r,s,_,d,g,c,f),{inputs:x,outputs:m>1?[-1,1]:[-1]})[0];e.compute(xo(v,d.batchSize,d.numHeads,g,d.sequenceLength,b,c,f),{inputs:c&&f?[v,c,f]:[v],outputs:[]});let w=[v,i];m>1&&u&&E.size(u.dims)>0&&w.push(u),c&&w.push(c),f&&w.push(f),e.compute(Ao(m,v,i,u,d,g,c,f),{inputs:w,outputs:m>1?[0,2]:[0]})},ko=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],i=t.sequenceLength,a=t.inputHiddenSize,n=t.headSize,s=12,u={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},l=[e.inputs[0],e.inputs[1],e.inputs[2]],d=[{type:12,data:i},{type:12,data:a},{type:12,data:n},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],c=f=>{let m=H("output_q",l[0].dataType,r),g=H("output_k",l[0].dataType,r),b=H("output_v",l[0].dataType,r),_=O("input",l[0].dataType,l[0].dims),x=O("weight",l[1].dataType,l[1].dims),v=O("bias",l[2].dataType,l[2].dims),w=_.type.storage,C=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${w}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${w}, ${s*s}>;
  var<workgroup> tileWeightK: array<${w}, ${s*s}>;
  var<workgroup> tileWeightV: array<${w}, ${s*s}>;
  ${f.registerUniforms(C).declareVariables(_,x,v,m,g,b)}
  ${f.mainStart([s,s,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${w}(0);
    var valueK = ${w}(0);
    var valueV = ${w}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:u,programUniforms:d}),getShaderSource:c},{inputs:l,outputs:[-1,-1,-1]})},So=(e,t)=>{let r=Io(e.inputs,t),[i,a,n]=ko(e,r);return Pt(e,i,a,n,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),To,Eo,zo,Bo,$h=M(()=>{Ge(),Q(),re(),we(),ne(),To=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(i,a,n)=>{let s=a.length;if(s!==i.length)throw new Error(`${n}: num dimensions != ${s}`);a.forEach((u,l)=>{if(u!==i[l])throw new Error(`${n}: dim[${l}] do not match`)})};if(e[0].dims.length>1){let i=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,i,"Invalid input scale"),r(e[2].dims,i,"Invalid input B"),r(e[3].dims,i,"Invalid input mean"),r(e[4].dims,i,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},Eo=(e,t)=>{let{epsilon:r,spatial:i,format:a}=t,n=e[0].dims,s=i?_e(n[n.length-1]):1,u=a==="NHWC"&&n.length>1?s:1,l=E.size(n)/s,d=i,c=d?n.length:n,f=O("x",e[0].dataType,e[0].dims,s),m=O("scale",e[1].dataType,e[1].dims,u),g=O("bias",e[2].dataType,e[2].dims,u),b=O("inputMean",e[3].dataType,e[3].dims,u),_=O("inputVar",e[4].dataType,e[4].dims,u),x=H("y",e[0].dataType,c,s),v=()=>{let C="";if(i)C=`let cOffset = ${n.length===1?"0u":a==="NHWC"?`outputIndices[${n.length-1}] / ${s}`:"outputIndices[1]"};`;else if(a==="NCHW")C=`
            ${x.indicesSet("outputIndices","0","0")}
            let cOffset = ${x.indicesToOffset("outputIndices")};`;else{C=`var cIndices = ${m.type.indices}(0);
                       cIndices[0] = outputIndices[${n.length-1}];`;for(let I=1;I<m.rank;I++)C+=`cIndices[${I}] = outputIndices[${I}];`;C+=`let cOffset = ${m.indicesToOffset("cIndices")};`}return C},w=C=>`
  const epsilon = ${r};
  ${C.registerUniform("outputSize","u32").declareVariables(f,m,g,b,_,x)}
  ${C.mainStart()}
  ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${x.offsetToIndices(`global_idx * ${s}`)};
    ${v()}
    let scale = ${m.getByOffset("cOffset")};
    let bias = ${g.getByOffset("cOffset")};
    let inputMean = ${b.getByOffset("cOffset")};
    let inputVar = ${_.getByOffset("cOffset")};
    let x = ${f.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${x.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${i}_${s}`,inputDependencies:d?["rank","type","type","type","type"]:void 0},getShaderSource:w,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d?[{type:12,data:l},...j(n)]:[{type:12,data:l}]})}},zo=e=>ce(e),Bo=(e,t)=>{let{inputs:r,outputCount:i}=e,a=zo({...t,outputCount:i});if(ge.webgpu.validateInputContent&&To(r,a),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Eo(r,a))}}),Oo,Ro,No,vh=M(()=>{re(),ne(),Oo=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Ro=e=>{let t=e[0].dims,r=e[0].dims[2],i=E.size(t)/4,a=e[0].dataType,n=O("input",a,t,4),s=O("bias",a,[r],4),u=O("residual",a,t,4),l=H("output",a,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:d=>`
  const channels = ${r}u / 4;
  ${d.declareVariables(n,s,u,l)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let value = ${n.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${u.getByOffset("global_idx")};
    ${l.setByOffset("global_idx","value")}
  }`}},No=e=>{Oo(e.inputs),e.compute(Ro(e.inputs))}}),Do,de,Wo,Mo,Vo,Go,Uo,Po,Lo,Zo,Ho,Fo,qo,Ko,jo,Xo,Lt,Jo,yr,Yo,Qo,eu,tu,ru,iu,au,nu,su,ou,uu,lu,du,pu,cu,fu,Ni,hu,Di,Wi,mu,gu,bu,yu,_u,wu,Mi=M(()=>{Q(),re(),we(),ne(),Do=(e,t,r,i,a,n,s)=>{let u=Math.ceil(t/4),l="";typeof a=="string"?l=`${a}(a)`:l=a("a");let d=O("inputData",r,[u],4),c=H("outputData",i,[u],4),f=[{name:"vec_size",type:"u32"}];return s&&f.push(...s),`
      ${e.registerUniforms(f).declareVariables(d,c)}

  ${n??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${c.setByOffset("global_idx",l)}
  }`},de=(e,t,r,i,a,n=e.dataType,s,u)=>{let l=[{type:12,data:Math.ceil(E.size(e.dims)/4)}];return s&&l.push(...s),{name:t,shaderCache:{hint:a,inputDependencies:["type"]},getShaderSource:d=>Do(d,E.size(e.dims),e.dataType,n,r,i,u),getRunData:d=>({outputs:[{dims:e.dims,dataType:n}],dispatchGroup:{x:Math.ceil(E.size(d[0].dims)/64/4)},programUniforms:l})}},Wo=e=>{e.compute(de(e.inputs[0],"Abs","abs"))},Mo=e=>{e.compute(de(e.inputs[0],"Acos","acos"))},Vo=e=>{e.compute(de(e.inputs[0],"Acosh","acosh"))},Go=e=>{e.compute(de(e.inputs[0],"Asin","asin"))},Uo=e=>{e.compute(de(e.inputs[0],"Asinh","asinh"))},Po=e=>{e.compute(de(e.inputs[0],"Atan","atan"))},Lo=e=>{e.compute(de(e.inputs[0],"Atanh","atanh"))},Zo=e=>ce(e),Ho=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(de(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},Fo=e=>{let t,r,i=e.length>=2&&e[1].data!==0,a=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=i?e[1].getFloat32Array()[0]:-34028234663852886e22,r=a?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=i?e[1].getUint16Array()[0]:64511,r=a?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return ce({min:t,max:r})},qo=(e,t)=>{let r=t||Fo(e.inputs),i=ke(e.inputs[0].dataType);e.compute(de(e.inputs[0],"Clip",a=>`clamp(${a}, vec4<${i}>(uniforms.min), vec4<${i}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:i},{name:"max",type:i}]),{inputs:[0]})},Ko=e=>{e.compute(de(e.inputs[0],"Ceil","ceil"))},jo=e=>{e.compute(de(e.inputs[0],"Cos","cos"))},Xo=e=>{e.compute(de(e.inputs[0],"Cosh","cosh"))},Lt=e=>ce(e),Jo=(e,t)=>{let r=ke(e.inputs[0].dataType);e.compute(de(e.inputs[0],"Elu",i=>`elu_vf32(${i})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},yr=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,Yo=e=>{let t=ke(e.inputs[0].dataType);e.compute(de(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,yr(t)))},Qo=e=>{e.compute(de(e.inputs[0],"Exp","exp"))},eu=e=>{e.compute(de(e.inputs[0],"Floor","floor"))},tu=e=>{let t=ke(e.inputs[0].dataType);e.compute(de(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,yr(t)))},ru=(e,t)=>{let r=ke(e.inputs[0].dataType);e.compute(de(e.inputs[0],"LeakyRelu",i=>`select(leaky_relu_alpha_ * ${i}, ${i}, ${i} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},iu=e=>{e.compute(de(e.inputs[0],"Not",t=>`!${t}`))},au=e=>{e.compute(de(e.inputs[0],"Neg",t=>`-${t}`))},nu=e=>{e.compute(de(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},su=e=>{let t=ke(e.inputs[0].dataType);e.compute(de(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},ou=e=>{e.compute(de(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},uu=e=>ce(e),lu=(e,t)=>{let r=ke(e.inputs[0].dataType);e.compute(de(e.inputs[0],"HardSigmoid",i=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${i} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},du=e=>{e.compute(de(e.inputs[0],"Sin","sin"))},pu=e=>{e.compute(de(e.inputs[0],"Sinh","sinh"))},cu=e=>{e.compute(de(e.inputs[0],"Sqrt","sqrt"))},fu=e=>{e.compute(de(e.inputs[0],"Tan","tan"))},Ni=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,hu=e=>{e.compute(de(e.inputs[0],"Tanh",Ni))},Di=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Ni("v")};
}
`,Wi=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,mu=e=>{let t=ke(e.inputs[0].dataType);e.compute(de(e.inputs[0],"FastGelu",Wi,Di(t),void 0,e.inputs[0].dataType))},gu=(e,t)=>{let r=ke(e.inputs[0].dataType);return e.compute(de(e.inputs[0],"ThresholdedRelu",i=>`select(vec4<${r}>(0.0), ${i}, ${i} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},bu=e=>{e.compute(de(e.inputs[0],"Log","log"))},yu=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,_u=e=>`quick_gelu_impl(${e})`,wu=(e,t)=>{let r=ke(e.inputs[0].dataType);e.compute(de(e.inputs[0],"QuickGelu",_u,yu(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),$u,vu,Iu,Ih=M(()=>{re(),ne(),Mi(),$u=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},vu=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=O("input",e[0].dataType,e[0].dims,4),i=O("bias",e[0].dataType,[e[0].dims[2]],4),a=H("output",e[0].dataType,t,4),n=E.size(t)/4,s=xe(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)}}),getShaderSource:u=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${u.declareVariables(r,i,a)}

  ${yr(s)}

  ${u.mainStart()}
    ${u.guardAgainstOutOfBoundsWorkgroupSizes(n)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${a.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Iu=e=>{$u(e.inputs),e.compute(vu(e.inputs))}}),xu,Cu,Fe,Au,ku,Su,Tu,Eu,zu,Bu,Ou,Ru,Nu,xh=M(()=>{Q(),re(),ne(),xu=(e,t,r,i,a,n,s,u,l,d,c,f)=>{let m,g;typeof u=="string"?m=g=(w,C)=>`${u}((${w}),(${C}))`:typeof u=="function"?m=g=u:(m=u.scalar,g=u.vector);let b=H("outputData",c,i.length,4),_=O("aData",l,t.length,4),x=O("bData",d,r.length,4),v;if(a)if(n){let w=E.size(t)===1,C=E.size(r)===1,I=t.length>0&&t[t.length-1]%4===0,A=r.length>0&&r[r.length-1]%4===0;w||C?v=b.setByOffset("global_idx",g(w?`${_.type.value}(${_.getByOffset("0")}.x)`:_.getByOffset("global_idx"),C?`${x.type.value}(${x.getByOffset("0")}.x)`:x.getByOffset("global_idx"))):v=`
            let outputIndices = ${b.offsetToIndices("global_idx * 4u")};
            let offsetA = ${_.broadcastedIndicesToOffset("outputIndices",b)};
            let offsetB = ${x.broadcastedIndicesToOffset("outputIndices",b)};
            ${b.setByOffset("global_idx",g(s||I?_.getByOffset("offsetA / 4u"):`${_.type.value}(${_.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||A?x.getByOffset("offsetB / 4u"):`${x.type.value}(${x.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else v=b.setByOffset("global_idx",g(_.getByOffset("global_idx"),x.getByOffset("global_idx")));else{if(!n)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let w=(C,I,A="")=>{let T=`aData[indexA${I}][componentA${I}]`,S=`bData[indexB${I}][componentB${I}]`;return`
            let outputIndices${I} = ${b.offsetToIndices(`global_idx * 4u + ${I}u`)};
            let offsetA${I} = ${_.broadcastedIndicesToOffset(`outputIndices${I}`,b)};
            let offsetB${I} = ${x.broadcastedIndicesToOffset(`outputIndices${I}`,b)};
            let indexA${I} = offsetA${I} / 4u;
            let indexB${I} = offsetB${I} / 4u;
            let componentA${I} = offsetA${I} % 4u;
            let componentB${I} = offsetB${I} % 4u;
            ${C}[${I}] = ${A}(${m(T,S)});
          `};c===9?v=`
            var data = vec4<u32>(0);
            ${w("data",0,"u32")}
            ${w("data",1,"u32")}
            ${w("data",2,"u32")}
            ${w("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:v=`
            ${w("outputData[global_idx]",0)}
            ${w("outputData[global_idx]",1)}
            ${w("outputData[global_idx]",2)}
            ${w("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(_,x,b)}

        ${f??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${v}
      }`},Cu=(e,t,r,i,a,n,s=r.dataType)=>{let u=r.dims.map(_=>Number(_)??1),l=i.dims.map(_=>Number(_)??1),d=!E.areEqual(u,l),c=u,f=E.size(u),m=!1,g=!1,b=[d];if(d){let _=Tt.calcShape(u,l,!1);if(!_)throw new Error("Can't perform binary op on the given tensors");c=_.slice(),f=E.size(c);let x=E.size(u)===1,v=E.size(l)===1,w=u.length>0&&u[u.length-1]%4===0,C=l.length>0&&l[l.length-1]%4===0;b.push(x),b.push(v),b.push(w),b.push(C);let I=1;for(let A=1;A<c.length;A++){let T=u[u.length-A],S=l[l.length-A];if(T===S)I*=T;else break}I%4===0?(g=!0,m=!0):(x||v||w||C)&&(m=!0)}else m=!0;return b.push(m),{name:e,shaderCache:{hint:t+b.map(_=>_.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:_=>xu(_,u,l,c,m,d,g,a,r.dataType,i.dataType,s,n),getRunData:()=>({outputs:[{dims:c,dataType:s}],dispatchGroup:{x:Math.ceil(f/64/4)},programUniforms:[{type:12,data:Math.ceil(E.size(c)/4)},...j(u,l,c)]})}},Fe=(e,t,r,i,a,n)=>{e.compute(Cu(t,a??"",e.inputs[0],e.inputs[1],r,i,n))},Au=e=>{Fe(e,"Add",(t,r)=>`${t}+${r}`)},ku=e=>{Fe(e,"Div",(t,r)=>`${t}/${r}`)},Su=e=>{Fe(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},Tu=e=>{Fe(e,"Mul",(t,r)=>`${t}*${r}`)},Eu=e=>{let t=O("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Fe(e,"Pow",{scalar:(r,i)=>`pow_custom(${r},${i})`,vector:(r,i)=>`pow_vector_custom(${r},${i})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},zu=e=>{Fe(e,"Sub",(t,r)=>`${t}-${r}`)},Bu=e=>{Fe(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},Ou=e=>{Fe(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},Ru=e=>{Fe(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},Nu=e=>{Fe(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),Du,Wu,Mu,Vu,Gu,Uu,Ch=M(()=>{Q(),re(),we(),ne(),Du=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,i=e[r],a=i.dataType,n=i.dims.length;e.forEach((s,u)=>{if(u!==r){if(s.dataType!==a)throw new Error("input tensors should be one type");if(s.dims.length!==n)throw new Error("input tensors should have the same shape");s.dims.forEach((l,d)=>{if(d!==t&&l!==i.dims[d])throw new Error("non concat dimensions must match")})}})},Wu=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Mu=(e,t)=>{let r=e.length,i=[];for(let a=0;a<r;++a){let n=t.setByOffset("global_idx",e[a].getByIndices("indices"));r===1?i.push(n):a===0?i.push(`if (inputIndex == ${a}u) { ${n} }`):a===r-1?i.push(`else { ${n} }`):i.push(`else if (inputIndex == ${a}) { ${n} }`)}return i.join(`
`)},Vu=(e,t,r,i)=>{let a=E.size(r),n=new Array(e.length),s=new Array(e.length),u=0,l=[],d=[],c=[{type:12,data:a}];for(let _=0;_<e.length;++_)u+=e[_].dims[t],n[_]=u,d.push(e[_].dims.length),s[_]=O(`input${_}`,i,d[_]),l.push("rank"),c.push({type:12,data:n[_]});for(let _=0;_<e.length;++_)c.push(...j(e[_].dims));c.push(...j(r));let f=H("output",i,r.length),m=f.indicesGet("indices",t),g=Array.from(Array(n.length).keys()).map(_=>`uniforms.sizeInConcatAxis${_}`).join(","),b=_=>`

  ${(()=>{_.registerUniform("outputSize","u32");for(let x=0;x<e.length;x++)_.registerUniform(`sizeInConcatAxis${x}`,"u32");return _.declareVariables(...s,f)})()}

  ${Wu(n.length,g)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${f.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${m});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${n.length}u>(${g});
      ${m} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Mu(s,f)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:i}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:c}),getShaderSource:b}},Gu=(e,t)=>{let r=e.inputs,i=r[0].dims,a=E.normalizeAxis(t.axis,i.length);Du(r,a);let n=i.slice();n[a]=r.reduce((u,l)=>u+(l.dims.length>a?l.dims[a]:0),0);let s=r.filter(u=>E.size(u.dims)>0);e.compute(Vu(s,a,n,r[0].dataType),{inputs:s})},Uu=e=>ce({axis:e.axis})}),yt,_t,wt,Vi,$t=M(()=>{Q(),re(),yt=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},_t=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},wt=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},Vi=e=>{let t=e?.activation||"";if(t==="HardSigmoid"){let[r,i]=e?.activation_params||[.2,.5];return{activation:t,alpha:r,beta:i}}else if(t==="Clip"){let[r,i]=e?.activation_params||[ls,ds];return{activation:t,clipMax:i,clipMin:r}}else if(t==="LeakyRelu"){let[r]=e?.activation_params||[.01];return{activation:t,alpha:r}}return{activation:t}}}),Ce,Pu,Gi=M(()=>{Ce=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},Pu=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),Lu,Ah=M(()=>{Lu=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),Zt,Ui,Pi=M(()=>{Q(),re(),ne(),$t(),Zt=(e,t,r,i,a)=>{let n=i-r;return`
      ${Array.from({length:r}).map((s,u)=>`
      if (${F(t.shape,u,t.rank)} != 1) {
        ${t.indicesSet(e,u,F(a,u+n,i))}
      } else {
        ${t.indicesSet(e,u,0)}
      }`).join("")}
`},Ui=(e,t,r,i,a=!1,n)=>{let s=e[0].dims,u=e[1].dims,l=s[s.length-2],d=u[u.length-1],c=s[s.length-1],f=_e(d),m=_e(c),g=_e(l),b=E.size(r)/f/g,_=e.length>2,x=i?i.slice(0,-2):r.slice(0,-2),v=[E.size(x),l,d],w=[{type:12,data:b},{type:12,data:l},{type:12,data:d},{type:12,data:c}];_t(t,w),w.push(...j(x,s,u)),_&&w.push(...j(e[2].dims)),w.push(...j(v));let C=I=>{let A=Si("batch_dims",e[0].dataType,x.length),T=O("a",e[0].dataType,s.length,m),S=O("b",e[1].dataType,u.length,f),z=H("output",e[0].dataType,v.length,f),D=xe(z.type.tensor),U=yt(t,z.type.value,D),X=[T,S],Z="";if(_){let ie=a?f:1;X.push(O("bias",e[2].dataType,e[2].dims.length,ie)),Z=`${a?`value += bias[col / ${ie}];`:`value += ${z.type.value}(bias[row + i]);`}`}let ee=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];wt(t,ee);let V=()=>{let ie=`var a_data: ${T.type.value};`;for(let J=0;J<m;J++)ie+=`
              let b_data${J} = b[(b_offset + (k + ${J}) * uniforms.N + col) / ${f}];`;for(let J=0;J<g;J++){ie+=`a_data = a[(a_offset + (row + ${J}) * uniforms.K + k) / ${m}];`;for(let L=0;L<m;L++)ie+=`
            values[${J}] = fma(${S.type.value}(a_data${m===1?"":`[${L}]`}), b_data${L}, values[${J}]);
`}return ie};return`
  ${I.registerUniforms(ee).registerInternalVariables(A).declareVariables(...X,z)}
  ${I.mainStart()}
    ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${f})) * ${f};
    var index1 = global_idx / (uniforms.N / ${f});
    let stride1 = uniforms.M / ${g};
    let row = (index1 % stride1) * ${g};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${A.offsetToIndices("batch")};`}

    var a_indices: ${T.type.indices};
    ${Zt("a_indices",T,T.rank-2,A.rank,"batch_indices")}
    ${T.indicesSet("a_indices",T.rank-2,0)}
    ${T.indicesSet("a_indices",T.rank-1,0)}
    let a_offset = ${T.indicesToOffset("a_indices")};

    var b_indices: ${S.type.indices};
    ${Zt("b_indices",S,S.rank-2,A.rank,"batch_indices")}
    ${S.indicesSet("b_indices",S.rank-2,0)}
    ${S.indicesSet("b_indices",S.rank-1,0)}
    let b_offset = ${S.indicesToOffset("b_indices")};
    var values: array<${z.type.value}, ${g}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${m}) {
      ${V()}
    }
    for (var i = 0u; i < ${g}u; i++) {
      var value = values[i];
      ${Z}
      ${U}
      let cur_indices = ${z.type.indices}(batch, row + i, col);
      let offset = ${z.indicesToOffset("cur_indices")};
      ${z.setByOffset(`offset / ${f}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${f};${m};${g};${a}`,inputDependencies:_?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(b/64)},programUniforms:w}),getShaderSource:C}}}),Zu,Hu,Li,Zi,Fu,Hi,qu,_r,Fi=M(()=>{Q(),re(),ne(),$t(),Pi(),Gi(),Zu=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Hu=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,Li=(e,t,r="f32",i,a=!1,n=32,s=!1,u=32)=>{let l=t[1]*e[1],d=t[0]*e[0],c=a?l:n,f=a?n:l,m=c/t[0],g=n/t[1];if(!((a&&m===4&&e[1]===4||!a&&(m===3||m===4))&&c%t[0]===0&&n%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${a} is true, innerElementSize ${m} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${m} must be 3 or 4.
  tileAWidth ${c} must be divisible by workgroupSize[0]${t[0]}. tileInner ${n} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${m}<${r}>, ${c/m}>, ${f}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${d/e[0]}>, ${n}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${m};
const tileInner = ${n};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${s?"0":"i32(globalId.z)"};
  ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${l};

  let num_tiles = ${s?`${Math.ceil(u/n)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${s?`i32(globalId.z) * ${u}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${g};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Zu(a,i)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${g}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${i?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${m===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${Hu(a,m)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Zi=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Fu=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",Hi=(e,t,r="f32",i,a=!1,n=32,s=!1,u=32,l=!1)=>{let d=e[1]*t[1],c=e[0]*t[0],f=a?d:n,m=a?n:d;if(!(m%t[1]===0&&f%t[0]===0&&n%t[1]===0))throw new Error(`tileAHight ${m} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${f} must be divisible by workgroupSize[0]${t[0]}, tileInner ${n} must be divisible by workgroupSize[1]${t[1]}`);let g=m/t[1],b=f/t[0],_=n/t[1],x=l?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${d};
    let globalColStart = i32(workgroupId.x) * ${c};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${m}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${f}; inputCol = inputCol + ${t[0]}) {
          ${Zi(a,i)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${n}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${c}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${i?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${a?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${d};

let tileRowA = i32(localId.y) * ${g};
let tileColA = i32(localId.x) * ${b};
let tileRowB = i32(localId.y) * ${_};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${g}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${b}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${Zi(a,i)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${_}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${i?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${Fu(a)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${f}>, ${m}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${c}>, ${n}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${n};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${s?"0":"i32(globalId.z)"};
    ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${s?`${Math.ceil(u/n)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${s?`i32(globalId.z) * ${u}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${x}
  }
`},qu=(e,t,r,i,a=!1)=>{let[n,s,u,l]=i,d=xe(i[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${n.type.indices}) -> ${Ce(e,d)} {
      var value = ${Ce(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${s.type.indices};
        ${Zt("aIndices",s,s.rank-2,n.rank,"batchIndices")}
        ${s.indicesSet("aIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("aIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${n.type.indices}) -> ${Ce(e,d)} {
      var value = ${Ce(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${u.type.indices};
        ${Zt("bIndices",u,u.rank-2,n.rank,"batchIndices")}
        ${u.indicesSet("bIndices",u.rank-2,"u32(row)")}
        ${u.indicesSet("bIndices",u.rank-1,"u32(colIn)")}
        value = ${u.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Ce(e,d)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${a?"bias[colIn]":`${Ce(e,d)}(bias[row])`};`:""}
        ${r}
        ${l.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},_r=(e,t,r,i,a=!1,n)=>{let s=e[0].dims,u=e[1].dims,l=s.slice(0,-2),d=u.slice(0,-2),c=i?i.slice(0,-2):r.slice(0,-2),f=E.size(c),m=s[s.length-2],g=s[s.length-1],b=u[u.length-1],_=g%4===0&&b%4===0,x=m<=8?[4,1,1]:[4,4,1],v=[8,8,1],w=[Math.ceil(b/v[0]/x[0]),Math.ceil(m/v[1]/x[1]),Math.ceil(f/v[2]/x[2])],C=_?4:1,I=[...l,m,g/C],A=I.length,T=[...d,g,b/C],S=T.length,z=[f,m,b/C],D=[{type:6,data:m},{type:6,data:b},{type:6,data:g}];_t(t,D),D.push(...j(c,I,T));let U=["rank","rank"],X=e.length>2;X&&(D.push(...j(e[2].dims)),U.push("rank")),D.push(...j(z));let Z=ee=>{let V=c.length,ie=Si("batchDims",e[0].dataType,V,1),J=xe(e[0].dataType),L=O("a",e[0].dataType,A,C),oe=O("b",e[1].dataType,S,C),q=H("result",e[0].dataType,z.length,C),ue=[L,oe];if(X){let ae=a?C:1;ue.push(O("bias",e[2].dataType,e[2].dims.length,ae))}let N=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];wt(t,N);let G=xe(q.type.tensor),te=yt(t,q.type.value,G),B=qu(C,X,te,[ie,L,oe,q],a);return`
  ${ee.registerUniforms(N).registerInternalVariables(ie).declareVariables(...ue,q)}
  ${B}
  ${_?Li(x,v,J,ie):Hi(x,v,J,ie)}
                   `};return{name:"MatMul",shaderCache:{hint:`${x};${t.activation};${_};${a}`,inputDependencies:U},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:w[0],y:w[1],z:w[2]},programUniforms:D}),getShaderSource:Z}}}),Ku,ju,kh=M(()=>{Q(),Qe(),ne(),$t(),Gi(),Ah(),Fi(),Ku=(e,t,r,i,a=!1,n,s=4,u=4,l=4,d="f32")=>{let c=D=>{switch(D){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${D} is not supported.`)}},f=D=>{switch(D){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${D} is not supported.`)}},m=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,g=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,b=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",_=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",x=e?"row":"col",v=e?"col":"row",w=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${x} / outWidth;
    let outCol = ${x} % outWidth;

    let WRow = ${v} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${v} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${v} % inChannels;
    var resData = ${Ce(s,d)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${b} && xCol >= 0 && xCol < ${_}) {
      ${m}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${c(s)}
    }
    return resData;`,C=e?t&&i?`
    let col = colIn * ${s};
    ${w}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${w}
    }
    return ${Ce(s,d)}(0.0);`:i&&r?`
    let col = colIn * ${s};
    ${w}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${w}
    }
    return ${Ce(s,d)}(0.0);`,I=e?i&&r?f(u):`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${f(u)}
    }
    return ${Ce(u,d)}(0.0);`:`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${f(u)}
    }
    return ${Ce(u,d)}(0.0);`,A=Ce(l,d),T=Ce(e?s:u,d),S=Ce(e?u:s,d),z=yt(n,A,d);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${T} {
      ${e?C:I}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${S} {
      ${e?I:C}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${A}) {
      let col = colIn * ${l};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${g}
      ${Pu(a)}
      ${z}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},ju=(e,t,r,i,a,n,s,u,l)=>{let d=t.format==="NHWC",c=d?e[0].dims[3]:e[0].dims[1],f=r[0],m=d?r[2]:r[3],g=d?r[1]:r[2],b=d?r[3]:r[1],_=d&&(c%4===0||c%3===0)&&b%4===0,x=d?b:m*g,v=d?m*g:b,w=[8,8,1],C=i<=8?[4,1,1]:[4,4,1],I=[Math.ceil(x/w[0]/C[0]),Math.ceil(v/w[1]/C[1]),Math.ceil(f/w[2]/C[2])];le("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${I}`);let A=_?d&&c%4!==0?3:4:1,T=w[1]*C[1],S=w[0]*C[0],z=Math.max(w[0]*A,w[1]),D=i%T===0,U=a%S===0,X=n%z===0,Z=_?[A,4,4]:[1,1,1],ee=[{type:6,data:i},{type:6,data:a},{type:6,data:n},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];_t(t,ee),ee.push(...j(e[0].dims,e[1].dims));let V=["rank","rank"];s&&(ee.push(...j(e[2].dims)),V.push("rank")),ee.push(...j(r));let ie=J=>{let L=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];wt(t,L);let oe=_?4:1,q=xe(e[0].dataType),ue=`
      fn setOutputAtIndex(flatIndex : i32, value : ${_?`vec4<${q}>`:q}) {
        result[flatIndex] = ${_?`vec4<${q}>`:q}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${_?`vec4<${q}>`:q}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${_?"/ 4":""}, value);
      }`,N=O("x",e[0].dataType,e[0].dims.length,A===3?1:A),G=O("w",e[1].dataType,e[1].dims.length,oe),te=[N,G],B=H("result",e[0].dataType,r.length,oe);if(s){let ae=O("bias",e[2].dataType,e[2].dims.length,oe);te.push(ae),ue+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${_?`vec4<${q}>`:q} {
          return bias[coords.${d?"w":"y"}${_?"/ 4":""}];
        }`}return`
        ${Lu("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${J.registerUniforms(L).declareVariables(...te,B)}
        ${ue}
        ${Ku(d,D,U,X,s,t,Z[0],Z[1],Z[2],q)}
        ${_?Li(C,w,q,void 0,!d,z):Hi(C,w,q,void 0,!d,z,!1,void 0,u)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${A};${_};${D};${U};${X};${T};${S};${z}`,inputDependencies:V},getRunData:()=>({outputs:[{dims:l?l(r):r,dataType:e[0].dataType}],dispatchGroup:{x:I[0],y:I[1],z:I[2]},programUniforms:ee}),getShaderSource:ie}}}),Xu,qi,Ht,Ju,Ki,Yu,Qu,el,Sh=M(()=>{Q(),Qe(),re(),ne(),$t(),Gi(),Xu=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},qi=e=>typeof e=="number"?[e,e,e]:e,Ht=(e,t)=>t<=1?e:e+(e-1)*(t-1),Ju=(e,t,r,i=1)=>{let a=Ht(t,i);return Math.floor((e[0]*(r-1)-r+a)/2)},Ki=(e,t,r,i,a)=>{a==null&&(a=Ju(e,t[0],i[0]));let n=[0,0,0,r];for(let s=0;s<3;s++)e[s]+2*a>=t[s]&&(n[s]=Math.trunc((e[s]-t[s]+2*a)/i[s]+1));return n},Yu=(e,t,r,i,a,n,s,u,l,d)=>{let c,f,m,g;if(e==="VALID"&&(e=0),typeof e=="number"){c={top:e,bottom:e,left:e,right:e,front:e,back:e};let b=Ki([t,r,i,1],[u,l,d],1,[a,n,s],e);f=b[0],m=b[1],g=b[2]}else if(Array.isArray(e)){if(!e.every((_,x,v)=>_===v[0]))throw Error(`Unsupported padding parameter: ${e}`);c={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let b=Ki([t,r,i,1],[u,l,d],1,[a,n,s],e[0]);f=b[0],m=b[1],g=b[2]}else if(e==="SAME_UPPER"){f=Math.ceil(t/a),m=Math.ceil(r/n),g=Math.ceil(i/s);let b=(f-1)*a+u-t,_=(m-1)*n+l-r,x=(g-1)*s+d-i,v=Math.floor(b/2),w=b-v,C=Math.floor(_/2),I=_-C,A=Math.floor(x/2),T=x-A;c={top:C,bottom:I,left:A,right:T,front:v,back:w}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:c,outDepth:f,outHeight:m,outWidth:g}},Qu=(e,t,r,i,a,n=!1,s="channelsLast")=>{let u,l,d,c,f;if(s==="channelsLast")[u,l,d,c,f]=e;else if(s==="channelsFirst")[u,f,l,d,c]=e;else throw new Error(`Unknown dataFormat ${s}`);let[m,,g,b,_]=t,[x,v,w]=qi(r),[C,I,A]=qi(i),T=Ht(g,C),S=Ht(b,I),z=Ht(_,A),{padInfo:D,outDepth:U,outHeight:X,outWidth:Z}=Yu(a,l,d,c,x,v,w,T,S,z),ee=n?m*f:m,V=[0,0,0,0,0];return s==="channelsFirst"?V=[u,ee,U,X,Z]:s==="channelsLast"&&(V=[u,U,X,Z,ee]),{batchSize:u,dataFormat:s,inDepth:l,inHeight:d,inWidth:c,inChannels:f,outDepth:U,outHeight:X,outWidth:Z,outChannels:ee,padInfo:D,strideDepth:x,strideHeight:v,strideWidth:w,filterDepth:g,filterHeight:b,filterWidth:_,effectiveFilterDepth:T,effectiveFilterHeight:S,effectiveFilterWidth:z,dilationDepth:C,dilationHeight:I,dilationWidth:A,inShape:e,outShape:V,filterShape:t}},el=(e,t,r,i,a,n)=>{let s=n==="channelsLast";s?e[0].dims[3]:e[0].dims[1];let u=[64,1,1],l={x:r.map((x,v)=>v)},d=[Math.ceil(Xu(l.x.map(x=>r[x]))/u[0]),1,1];le("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${d}`);let c=1,f=E.size(r),m=[{type:12,data:f},{type:12,data:i},{type:12,data:a},{type:12,data:t.strides},{type:12,data:t.dilations}];_t(t,m),m.push(...j(e[0].dims,e[1].dims));let g=["rank","rank"],b=e.length===3;b&&(m.push(...j(e[2].dims)),g.push("rank")),m.push(...j(r));let _=x=>{let v=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:i.length},{name:"pads",type:"u32",length:a.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];wt(t,v);let w=1,C=xe(e[0].dataType),I=O("x",e[0].dataType,e[0].dims.length,c),A=O("W",e[1].dataType,e[1].dims.length,w),T=[I,A],S=H("result",e[0].dataType,r.length,w),z="";if(b){let X=O("bias",e[2].dataType,e[2].dims.length,w);T.push(X),z+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${C} {
          return bias[${s?F("coords",4,5):F("coords",1,5)}];
        }`}let D=Ce(c,C),U=yt(t,D,C);return`
            ${z}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${I.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${A.getByIndices("aIndices")};
            }
          ${x.registerUniforms(v).declareVariables(...T,S)}
          ${x.mainStart()}
          ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${S.offsetToIndices("global_idx")};
              let batch = ${F("coords",0,I.rank)};
              let d2 = ${s?F("coords",I.rank-1,I.rank):F("coords",1,I.rank)};
              let xFRCCorner = vec3<u32>(${s?F("coords",1,I.rank):F("coords",2,I.rank)},
              ${s?F("coords",2,I.rank):F("coords",3,I.rank)},
              ${s?F("coords",3,I.rank):F("coords",4,I.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?F("uniforms.x_shape",1,I.rank):F("uniforms.x_shape",2,I.rank)};
              let xShapeZ = ${s?F("uniforms.x_shape",2,I.rank):F("uniforms.x_shape",3,I.rank)};
              let xShapeW = ${s?F("uniforms.x_shape",3,I.rank):F("uniforms.x_shape",4,I.rank)};
              let xShapeU = ${s?F("uniforms.x_shape",4,I.rank):F("uniforms.x_shape",1,I.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${s?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${s?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${s?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${s?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${b?"value = value + getBiasByOutputCoords(coords)":""};
              ${U}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${c};${b}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:d[0],y:d[1],z:d[2]},programUniforms:m}),getShaderSource:_}}}),tl,rl,Th=M(()=>{Q(),re(),ne(),$t(),tl=(e,t,r,i)=>{let a=e.length>2,n=a?"value += b[output_channel];":"",s=e[0].dims,u=e[1].dims,l=t.format==="NHWC",d=l?r[3]:r[1],c=d/t.group,f=l&&c>=4?_e(d):1,m=E.size(r)/f,g=[{type:12,data:m},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:c}];_t(t,g),g.push(...j(s,[u[0],u[1],u[2],u[3]/f]));let b=a?["rank","rank","rank"]:["rank","rank"];g.push(...j([r[0],r[1],r[2],r[3]/f]));let _=x=>{let v=H("output",e[0].dataType,r.length,f),w=xe(v.type.tensor),C=yt(t,v.type.value,w),I=O("x",e[0].dataType,s.length),A=O("w",e[1].dataType,u.length,f),T=[I,A];a&&T.push(O("b",e[2].dataType,e[2].dims,f));let S=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];wt(t,S);let z=l?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${I.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${A.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${I.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${A.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${x.registerUniforms(S).declareVariables(...T,v)}

  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${v.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${l?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${l?1:2}], outputIndices[${l?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${f} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${l?2:1}];

    var value: ${v.type.value} = ${v.type.value}(0);
    ${z}
    ${n}
    ${C}
    ${v.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${f}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:g}),getShaderSource:_}},rl=(e,t,r,i)=>{let a=e.length>2,n=_e(r[3]),s=_e(r[2]),u=E.size(r)/n/s,l=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/n],d=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/n],c=[r[0],r[1],r[2],r[3]/n],f=[{type:12,data:u},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];_t(t,f),f.push(...j(l,d,c));let m=(s-1)*t.strides[1]+d[1],g=b=>{let _=H("output",e[0].dataType,c.length,n),x=xe(_.type.tensor),v=yt(t,_.type.value,x),w=O("x",e[0].dataType,l.length,n),C=O("w",e[1].dataType,d.length,n),I=[w,C];a&&I.push(O("b",e[2].dataType,e[2].dims,n));let A=a?"value += b[output_channel];":"",T=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return wt(t,T),`
  ${b.registerUniforms(T).declareVariables(...I,_)}
  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${s}u;
    let col = (index1 % width1) * ${s}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${w.type.value}, ${m}>;
    var values: array<${_.type.value}, ${s}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${d[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${m}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${w.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${w.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${d[1]}; w_width++) {
          let w_val = ${C.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${s}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${s}u; i++) {
      var value = values[i];
      ${A}
      ${v}
      ${_.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${n};${s};${m};${d[0]};${d[1]}`,inputDependencies:a?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:f}),getShaderSource:g}}}),il,wr,al,$r,ji,Xi,nl,sl,Ji,Eh=M(()=>{re(),kh(),Sh(),Fi(),Th(),$t(),Pi(),nt(),il=(e,t,r,i,a,n)=>{let s=e[0],u=e.slice(n?1:2,n?3:4),l=u.length,d=t[0],c=t.slice(2).map((m,g)=>m+(m-1)*(r[g]-1)),f=u.map((m,g)=>m+i[g]+i[g+l]).map((m,g)=>Math.floor((m-c[g]+a[g])/a[g]));return f.splice(0,0,s),f.splice(n?3:1,0,d),f},wr=[2,3,1,0],al=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[1]*t.group;if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},$r=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let n=2;n<t[1].dims.length;++n)r[n-2]===0&&(r[n-2]=t[1].dims[n]);let i=e.pads.slice();cr.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,i,e.format==="NHWC",e.autoPad);let a=Object.assign({},e);return Object.assign(a,{kernelShape:r,pads:i}),a},ji=e=>{let t=Vi(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],a=e.dilations,n=e.group,s=e.kernel_shape,u=e.pads,l=e.strides,d=e.w_is_const();return{autoPad:i,format:r,dilations:a,group:n,kernelShape:s,pads:u,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},Xi=(e,t,r,i)=>{let a=r.format==="NHWC",n=il(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,a);if(r.group!==1){let T=[t[0]];if(a){let S=e.kernelCustomData.wT??e.compute(Oe(t[1],wr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=S),T.push(S)}else T.push(t[1]);t.length===3&&T.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&a&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(rl(T,r,n,i),{inputs:T}):e.compute(tl(T,r,n,i),{inputs:T});return}let s=t.length===3,u=t[0].dims[a?1:2],l=t[0].dims[a?2:3],d=t[0].dims[a?3:1],c=t[1].dims[2],f=t[1].dims[3],m=n[a?1:2],g=n[a?2:3],b=n[a?3:1],_=a&&c===u&&f===l&&r.pads[0]===0&&r.pads[1]===0;if(_||c===1&&f===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let T=n[0],S,z,D,U=[];if(a){let ee=e.kernelCustomData.wT??e.compute(Oe(t[1],wr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=ee),_){let V=u*l*d;S=t[0].reshape([1,T,V]),z=ee.reshape([1,V,b]),D=[1,T,b]}else S=t[0].reshape([T,u*l,d]),z=ee.reshape([1,d,b]),D=[T,m*g,b];U.push(S),U.push(z)}else S=t[0].reshape([T,d,u*l]),z=t[1].reshape([1,b,d]),D=[T,b,m*g],U.push(z),U.push(S);s&&U.push(t[2]);let X=D[2],Z=U[0].dims[U[0].dims.length-1];X<8&&Z<8?e.compute(Ui(U,r,n,D,a,i),{inputs:U}):e.compute(_r(U,r,n,D,a,i),{inputs:U});return}let x=!0,v=e.kernelCustomData.wT??e.compute(Oe(t[1],wr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=v);let w=[t[0],v];s&&w.push(t[2]);let C=a?m*g:b,I=a?b:m*g,A=c*f*d;e.compute(ju(w,r,n,C,I,A,s,x,i),{inputs:w})},nl=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let a=[0,t.pads[0],0,t.pads[1]],n=[1].concat(t.strides),s=[1].concat(t.dilations),u=[1].concat(t.kernelShape),l=$r({...t,pads:a,strides:n,dilations:s,kernelShape:u},i);Xi(e,i,l,d=>r?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},sl=(e,t,r)=>{let i=r.format==="NHWC"?"channelsLast":"channelsFirst",a=$r(r,t),n=r.autoPad==="NOTSET"?r.pads:r.autoPad,s=Qu(t[0].dims,t[1].dims,r.strides,r.dilations,n,!1,i);e.compute(el(t,a,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],i))},Ji=(e,t)=>{if(al(e.inputs,t),e.inputs[0].dims.length===3)nl(e,t);else if(e.inputs[0].dims.length===5)sl(e,e.inputs,t);else{let r=$r(t,e.inputs);Xi(e,e.inputs,r)}}}),ol,zh=M(()=>{Q(),Qe(),re(),ne(),ol=(e,t,r)=>{let i=e.length>2,a=t.outputShape,n=t.format==="NHWC",s=t.group,u=e[1].dims,l=u[2]/s,d=u[3],c=n?_e(l):1,f=n&&d===1&&l>=4,m=f?Math.floor(l/4)*4:Math.floor(l/c)*c,g=l-m,b=n?_e(d):1,_=n?d===1?c:b:1,x=E.size(a)/b,v=[Math.ceil(x/64),1,1];le("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${v}`);let w=["rank","rank"],C=[t.strides[0],t.strides[1]],I=[t.kernelShape[n?1:2],t.kernelShape[n?2:3]],A=[t.dilations[0],t.dilations[1]],T=[I[0]+(t.dilations[0]<=1?0:(t.kernelShape[n?1:2]-1)*(t.dilations[0]-1)),I[1]+(t.dilations[1]<=1?0:(t.kernelShape[n?2:3]-1)*(t.dilations[1]-1))],S=[T[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),T[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],z=[{type:12,data:x},{type:12,data:C},{type:12,data:I},{type:12,data:A},{type:12,data:T},{type:6,data:S},{type:12,data:m},{type:12,data:l},{type:12,data:d},...j(e[0].dims,e[1].dims)];i&&(z.push(...j(e[2].dims)),w.push("rank")),z.push(...j(a));let D=U=>{let X=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:C.length},{name:"filter_dims",type:"u32",length:I.length},{name:"dilations",type:"u32",length:I.length},{name:"effective_filter_dims",type:"u32",length:T.length},{name:"pads",type:"i32",length:S.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],Z=xe(e[0].dataType),ee=n?1:2,V=n?2:3,ie=n?3:1,J=O("W",e[1].dataType,e[1].dims.length,_),L=O("Dy",e[0].dataType,e[0].dims.length,c),oe=[L,J];i&&oe.push(O("bias",e[2].dataType,[a[ie]].length,b));let q=H("result",e[0].dataType,a.length,b),ue=()=>{let te="";if(f)c===4?te+=`
        let xValue = ${L.getByOffset("x_offset")};
        let wValue = ${J.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:c===2?te+=`
          dotProd = dotProd + dot(vec4<${Z}>(${L.getByOffset("x_offset")}, ${L.getByOffset("x_offset + 1u")}), vec4<${Z}>(${J.getByOffset("w_offset")}, ${J.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:c===1&&(te+=`
          dotProd = dotProd + dot(vec4<${Z}>(${L.getByOffset("x_offset")}, ${L.getByOffset("x_offset + 1u")}, ${L.getByOffset("x_offset + 2u")}, ${L.getByOffset("x_offset + 3u")}), vec4<${Z}>(${J.getByOffset("w_offset")}, ${J.getByOffset("w_offset + 1u")}, ${J.getByOffset("w_offset + 2u")}, ${J.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(te+=`
                  let xValue = ${n?L.getByOffset(`${L.indicesToOffset(`${L.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c}`):L.get("batch","inputChannel","idyR","idyC")};
        `,c===1)te+=`
          let w_offset = ${J.indicesToOffset(`${J.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${J.getByOffset(`w_offset / ${_}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let B=0;B<c;B++)te+=`
            let wValue${B} = ${J.getByOffset(`${J.indicesToOffset(`${J.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${B}, wOutChannel)`)} / ${_}`)};
            dotProd = dotProd + xValue[${B}] * wValue${B};`;return te},N=()=>{if(g===0)return"";if(!f)throw new Error(`packInputAs4 ${f} is not true.`);let te="";if(c===1){te+="dotProd = dotProd";for(let B=0;B<g;B++)te+=`
            + ${L.getByOffset(`x_offset + ${B}`)} * ${J.getByOffset(`w_offset + ${B}`)}`;te+=";"}else if(c===2){if(g!==2)throw new Error(`Invalid inputChannelsRemainder ${g}.`);te+=`
          let xValue = ${L.getByOffset("x_offset")};
          let wValue = ${J.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return te},G=`
            let outputIndices = ${q.offsetToIndices(`global_idx * ${b}`)};
            let batch = ${q.indicesGet("outputIndices",0)};
            let d1 = ${q.indicesGet("outputIndices",ie)};
            let r = ${q.indicesGet("outputIndices",ee)};
            let c = ${q.indicesGet("outputIndices",V)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${q.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${Z}(dyRCorner) + ${Z}(wR)) / ${Z}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${Z}(uniforms.Dy_shape[${ee}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${Z}(dyCCorner) + ${Z}(wC)) / ${Z}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${Z}(uniforms.Dy_shape[${V}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${f?`
                var x_offset = ${L.indicesToOffset(`${L.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c};
                var w_offset = ${J.indicesToOffset(`${J.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${_};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${f?4:c}) {
                  ${ue()}
                  inputChannel = inputChannel + ${f?4:c};
                }
                ${N()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${i?` + bias[d1 / ${b}]`:""};
            ${q.setByOffset("global_idx","value")};
          `;return`
    ${U.registerUniforms(X).declareVariables(...oe,q)}
      ${U.mainStart()}
      ${U.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${G}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${c}${_}${b}${f}${g}`,inputDependencies:w},getRunData:()=>({dispatchGroup:{x:v[0],y:v[1],z:v[2]},outputs:[{dims:r?r(a):a,dataType:e[0].dataType}],programUniforms:z}),getShaderSource:D}}}),ul,ll,dl,Yi,pl,cl,Qi,fl,hl,Bh=M(()=>{zh(),$t(),nt(),ul=(e,t,r,i,a,n)=>(e-1)*t+r+(i-1)*a+1-n,ll=(e,t,r,i,a)=>{let n=Math.floor(e/2);t==="SAME_UPPER"?(r[i]=n,r[a]=e-n):t==="SAME_LOWER"&&(r[i]=e-n,r[a]=n)},dl=(e,t,r,i,a,n,s,u,l,d)=>{let c=e.length-2,f=d.length===0;l.length<c&&l.push(...Array(c-l.length).fill(0));let m=e[0],g=t[u?3:1]*a;for(let b=0,_=e.length-c-(u?1:0);b<c;++b,++_){let x=e[_],v=f?x*s[b]:d[b],w=ul(x,s[b],n[b],t[_],r[b],v);ll(w,i,n,b,b+c),f&&d.push(s[b]*(x-1)+l[b]+(t[_]-1)*r[b]+1-n[b]-n[b+c])}d.splice(0,0,m),d.splice(u?3:1,0,g)},Yi=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((f,m)=>f*m,1)===0){r.length=0;for(let f=2;f<t[1].dims.length;++f)r.push(t[1].dims[f])}let i=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(i?3:1,0,t[1].dims[1]);let a=e.pads.slice(),n=e.outputShape.slice(),s=e.outputPadding.slice(),u=t[0].dims,l=e.dilations.slice();if(l.reduce((f,m)=>f+m,0)===0){let f=t[0].dims.length-2;l=new Array(f).fill(1)}let d=e.strides.slice();if(d.reduce((f,m)=>f+m,0)===0){let f=t[0].dims.length-2;d=new Array(f).fill(1)}dl(u,r,l,e.autoPad,e.group,a,d,i,s,n);let c=Object.assign({},e);return Object.assign(c,{kernelShape:r,pads:a,outputPadding:s,outputShape:n,dilations:l,strides:d}),c},pl=e=>{let t=Vi(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],a=e.dilations,n=e.group,s=e.kernelShape,u=e.pads,l=e.strides,d=e.wIsConst(),c=e.outputPadding,f=e.outputShape;return{autoPad:i,format:r,dilations:a,group:n,kernelShape:s,outputPadding:c,outputShape:f,pads:u,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},cl=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[0];if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let a=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==a))throw new Error("invalid bias");let n=e[0].dims.length-2;if(t.dilations.reduce((s,u)=>s+u,0)>0&&t.dilations.length!==n)throw new Error(`dilations should be ${n}D`);if(t.strides.reduce((s,u)=>s+u,0)>0&&t.strides.length!==n)throw new Error(`strides should be ${n}D`);if(t.pads.reduce((s,u)=>s+u,0)>0&&t.pads.length!==n*2)throw new Error(`pads should be ${n*2}D`);if(t.outputPadding.length!==n&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${n}D`);if(t.kernelShape.reduce((s,u)=>s+u,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Qi=(e,t,r,i)=>{let a=e.kernelCustomData.wT??e.compute(Oe(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=a);let n=[t[0],a];t.length===3&&n.push(t[2]),e.compute(ol(n,r,i),{inputs:n})},fl=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let a=t.kernelShape;(a.length===0||a[0]===0)&&(a=[e.inputs[1].dims[2]]);let n=t.dilations;(n.length===0||n[0]===0)&&(n=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let u=t.pads;u.length===0&&(u=[0,0]),u=[0,u[0],0,u[1]],s=[1].concat(s),n=[1].concat(n),a=[1].concat(a);let l=t.outputPadding;l=[0].concat(l);let d=Yi({...t,pads:u,strides:s,dilations:n,kernelShape:a,outputPadding:l},i);Qi(e,i,d,c=>r?[c[0],c[2],c[3]]:[c[0],c[1],c[3]])},hl=(e,t)=>{if(cl(e.inputs,t),e.inputs[0].dims.length===3)fl(e,t);else{let r=Yi(t,e.inputs);Qi(e,e.inputs,r)}}}),ml,gl,bl,Oh=M(()=>{Q(),re(),we(),ne(),ml=(e,t,r,i)=>{let a=E.size(t),n=t.length,s=O("input",e,n),u=H("output",e,n),l=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),d=E.normalizeAxis(l,n),c=f=>{let m=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,g=F("uniforms.input_shape","uniforms.axis",n),b=i.reverse?m+(i.exclusive?" + 1":""):"0",_=i.reverse?g:m+(i.exclusive?"":" + 1");return`
                ${f.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(s,u)}
                ${f.mainStart()}
                  ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${u.offsetToIndices("global_idx")};
                  var sum = ${u.type.value}(0);
                  let first : i32 = ${b};
                  let last : i32 = ${_};
                  for (var i : i32 = first; i < last; i++) {
                    ${s.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${s.getByIndices("inputIndices")};
                  }
                  ${u.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:i.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},{type:12,data:d},...j(t,t)]}),getShaderSource:c}},gl=(e,t)=>{let r=e.inputs[0].dims,i=e.inputs[0].dataType,a=e.inputs[1];e.compute(ml(i,r,a,t),{inputs:[0]})},bl=e=>{let t=e.exclusive===1,r=e.reverse===1;return ce({exclusive:t,reverse:r})}}),yl,_l,wl,$l,vl,Rh=M(()=>{Q(),re(),we(),ne(),yl=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},_l=(e,t,r,i)=>{let a=[];a.push(`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let n=0;n<t;++n)a.push(r.indicesSet("a",e[n],`i[${n}]`));return a.push("return a;}"),a.join(`
`)},wl=(e,t)=>{let r,i,a,n,s,u,l=t.format==="NHWC",d=t.blocksize,c=t.mode==="DCR";l?([r,i,a,n]=e.dims,s=c?[r,i,a,d,d,n/d**2]:[r,i,a,n/d**2,d,d],u=c?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,i,a,n]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=c?[r,d,d,n/d**2,i,a]:[r,n/d**2,d,d,i,a],u=c?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let f=e.reshape(s),m=f.dims.length,g=e.dataType,b=O("a",g,m),_=H("output",g,m),x=v=>`
  ${v.registerUniform("output_size","u32").declareVariables(b,_)}

  ${_l(u,m,b,_)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${_.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${_.setByOffset("global_idx",b.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:v=>{let w=l?[r,i*d,a*d,n/d**2]:[r,n/d**2,i*d,a*d],C=E.size(w),I=f.dims,A=E.sortBasedOnPerm(I,u);return{outputs:[{dims:w,dataType:v[0].dataType}],dispatchGroup:{x:Math.ceil(C/64)},programUniforms:[{type:12,data:C},...j(I,A)]}},getShaderSource:x}},$l=(e,t)=>{yl(e.inputs),e.compute(wl(e.inputs[0],t))},vl=e=>ce({blocksize:e.blocksize,mode:e.mode,format:e.format})}),vr,Ft,ea,Il,xl,Cl,Al,ta,kl,Sl,Tl,Nh=M(()=>{Q(),re(),we(),ne(),vr="[a-zA-Z]|\\.\\.\\.",Ft="("+vr+")+",ea="^"+Ft+"$",Il="("+Ft+",)*"+Ft,xl="^"+Il+"$",Cl=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},Al=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,i]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(xl)))throw new Error("Invalid LHS term");if(r.split(",").forEach((a,n)=>{let s=e[n].dims.slice();if(!a.match(RegExp(ea)))throw new Error("Invalid LHS term");let u=this.processTerm(a,!0,s,n);this.lhs.push(u)}),i==="")i+=[...this.symbolToInfo.entries()].filter(([a,n])=>n.count===1||a==="...").map(([a])=>a).join("");else if(!i.match(RegExp(Ft)))throw new Error("Invalid RHS");i.match(RegExp(vr,"g"))?.forEach(a=>{if(a==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let n=this.symbolToInfo.get(a);if(n===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(n.dimValue)}}),this.rhs=this.processTerm(i,!1,this.outputDims)}addSymbol(e,t,r){let i=this.symbolToInfo.get(e);if(i!==void 0){if(i.dimValue!==t&&i.count!==1)throw new Error("Dimension mismatch");i.count++,i.inputIndices.push(r)}else i={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,i)}processTerm(e,t,r,i=-1){let a=r.length,n=!1,s=[],u=0;if(!e.match(RegExp(ea))&&!t&&e!=="")throw new Error("Invalid LHS term");let l=e.match(RegExp(vr,"g")),d=new Cl(i);return l?.forEach((c,f)=>{if(c==="..."){if(n)throw new Error("Only one ellipsis is allowed per input term");n=!0;let m=a-l.length+1;if(m<0)throw new Error("Ellipsis out of bounds");if(s=r.slice(u,u+m),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let g=0;g<s.length;g++){let b=String.fromCharCode(48+g);d.addSymbol(b,f+g),this.addSymbol(b,r[u++],i)}}else d.addSymbol(c,f+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(c,r[u++],i)}),d}},ta=e=>e+"_max",kl=(e,t,r,i)=>{let a=e.map(d=>d.length).map((d,c)=>O(`input${c}`,t,d)),n=E.size(i),s=H("output",t,i.length),u=[...r.symbolToInfo.keys()].filter(d=>!r.rhs.symbolToIndices.has(d)),l=d=>{let c=[],f="var prod = 1.0;",m="var sum = 0.0;",g="sum += prod;",b=[],_=[],x=[],v=[],w=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((I,A)=>{if(r.rhs.symbolToIndices.has(A)){let T=r.rhs.symbolToIndices.get(A)?.[0];T!==void 0&&r.lhs.forEach((S,z)=>{if(I.inputIndices.includes(z)){let D=S.symbolToIndices.get(A);if(D===void 0)throw new Error("Invalid symbol error");D.forEach(U=>{c.push(`${a[z].indicesSet(`input${z}Indices`,U,s.indicesGet("outputIndices",T))}`)})}})}else r.lhs.forEach((T,S)=>{if(I.inputIndices.includes(S)){let z=T.symbolToIndices.get(A);if(z===void 0)throw new Error("Invalid symbol error");z.forEach(D=>{b.push(`${a[S].indicesSet(`input${S}Indices`,D,`${A}`)}`)}),v.push(`prod *= ${a[S].getByIndices(`input${S}Indices`)};`)}}),_.push(`for(var ${A}: u32 = 0; ${A} < uniforms.${ta(A)}; ${A}++) {`),x.push("}")});let C=w?[...c,`let sum = ${a.map((I,A)=>I.getByIndices(`input${A}Indices`)).join(" * ")};`]:[...c,m,..._,...b,f,...v,g,...x];return`
            ${d.registerUniforms(u.map(I=>({name:`${ta(I)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...a,s)}

            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${a.map((I,A)=>`var input${A}Indices: ${a[A].type.indices};`).join(`
`)}
            ${C.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let d=u.filter(f=>r.symbolToInfo.has(f)).map(f=>({type:12,data:r.symbolToInfo.get(f)?.dimValue||0}));d.push({type:12,data:n});let c=e.map((f,m)=>[...j(f)]).reduce((f,m)=>f.concat(m),d);return c.push(...j(i)),{outputs:[{dims:i,dataType:t}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:c}},getShaderSource:l}},Sl=(e,t)=>{let r=new Al(e.inputs,t.equation),i=r.outputDims,a=e.inputs.map((n,s)=>n.dims);e.compute(kl(a,e.inputs[0].dataType,r,i))},Tl=e=>{let t=e.equation.replace(/\s+/g,"");return ce({equation:t})}}),El,ra,zl,Bl,Ol,Dh=M(()=>{Q(),re(),ne(),El=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=r.length<t.length?0:r.length-t.length,a=t.length<r.length?0:t.length-r.length;for(;i<r.length&&a<t.length;++i,++a)if(r[i]!==t[a]&&r[i]!==1&&t[a]!==1)throw new Error("Expand requires shape to be broadcastable to input")},ra=(e,t)=>{let r=e.length-t.length,i=[];for(let a=0;a<r;++a)i.push(e[a]);for(let a=0;a<t.length;++a)i.push(t[a]===1?e[a+r]:t[a]);return i},zl=(e,t)=>e.length>t.length?ra(e,t):ra(t,e),Bl=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=zl(t,r),a=e[0].dataType,n=a===9||E.size(t)===1,s=a===9||t.length>0&&t[t.length-1]%4===0?4:1,u=n||i.length>0&&i[i.length-1]%4===0?4:1,l=Math.ceil(E.size(i)/u),d=f=>{let m=O("input",a,t.length,s),g=H("output",a,i.length,u),b;if(a===9){let _=(x,v,w="")=>`
          let outputIndices${v} = ${g.offsetToIndices(`outputOffset + ${v}u`)};
          let offset${v} = ${m.broadcastedIndicesToOffset(`outputIndices${v}`,g)};
          let index${v} = offset${v} / 4u;
          let component${v} = offset${v} % 4u;
          ${x}[${v}] = ${w}(${m.getByOffset(`index${v}`)}[component${v}]);
        `;b=`
        let outputOffset = global_idx * ${u};
        var data = vec4<u32>(0);
        ${_("data",0,"u32")}
        ${_("data",1,"u32")}
        ${_("data",2,"u32")}
        ${_("data",3,"u32")}
        ${g.setByOffset("global_idx","data")}
      }`}else b=`
        let outputIndices = ${g.offsetToIndices(`global_idx * ${u}`)};
        let inputOffset = ${m.broadcastedIndicesToOffset("outputIndices",g)};
        let data = ${g.type.value}(${m.getByOffset(`inputOffset / ${s}`)});
        ${g.setByOffset("global_idx","data")}
      }`;return`
    ${f.registerUniform("vec_size","u32").declareVariables(m,g)}
    ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${b}`},c=[{type:12,data:l},...j(t,i)];return{name:"Expand",shaderCache:{hint:`${i.length};${s}${u}`,inputDependencies:["rank"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:c})}},Ol=e=>{El(e.inputs),e.compute(Bl(e.inputs),{inputs:[0]})}}),Rl,Nl,Wh=M(()=>{Q(),re(),ne(),Mi(),Rl=e=>{let t=e[0].dataType,r=E.size(e[0].dims),i=E.size(e[1].dims),a=i%4===0,n=s=>{let u=O("x",t,[1],4),l=O("bias",t,[1],4),d=H("y",t,[1],4),c=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],f=g=>`
      let bias${g}_offset: u32 = (global_idx * 4 + ${g}) % uniforms.bias_size;
      let bias${g} = ${l.getByOffset(`bias${g}_offset / 4`)}[bias${g}_offset % 4];`,m=a?`
      let bias = ${l.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${f(0)}${f(1)}${f(2)}${f(3)}
      let bias = ${u.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(c).declareVariables(u,l,d)}

    ${Di(ke(t))}

    ${s.mainStart(Et)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${u.getByOffset("global_idx")};
      ${m}
      let x_in = x + bias;
      ${d.setByOffset("global_idx",Wi("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${a}`,inputDependencies:["type","type"]},getShaderSource:n,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:i}],dispatchGroup:{x:Math.ceil(r/Et/4)}})}},Nl=e=>{e.inputs.length<2||E.size(e.inputs[1].dims)===0?mu(e):e.compute(Rl(e.inputs))}}),Dl,Wl,Ml,Vl,Mh=M(()=>{Q(),re(),we(),ne(),Dl=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},Wl=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r.length,n=E.normalizeAxis(t.axis,a),s=r.slice(0);s.splice(n,1,...i);let u=r[n],l=e[0].dataType===9?4:1,d=Math.ceil(E.size(s)/l),c=[{type:12,data:d},{type:6,data:u},{type:12,data:n},...j(e[0].dims,e[1].dims,s)],f=m=>{let g=O("data",e[0].dataType,e[0].dims.length,l),b=O("inputIndices",e[1].dataType,e[1].dims.length),_=H("output",e[0].dataType,s.length,l),x=w=>{let C=i.length,I=`var indicesIndices${w}  = ${b.type.indices}(0);`;for(let A=0;A<C;A++)I+=`${C>1?`indicesIndices${w}[${A}]`:`indicesIndices${w}`} = ${s.length>1?`outputIndices${w}[uniforms.axis + ${A}]`:`outputIndices${w}`};`;I+=`
          var idx${w} = ${b.getByIndices(`indicesIndices${w}`)};
          if (idx${w} < 0) {
            idx${w} = idx${w} + uniforms.axisDimLimit;
          }
          var dataIndices${w} : ${g.type.indices};
        `;for(let A=0,T=0;A<a;A++)A===n?(I+=`${a>1?`dataIndices${w}[${A}]`:`dataIndices${w}`} = u32(idx${w});`,T+=C):(I+=`${a>1?`dataIndices${w}[${A}]`:`dataIndices${w}`} = ${s.length>1?`outputIndices${w}[${T}]`:`outputIndices${w}`};`,T++);return I},v;if(e[0].dataType===9){let w=(C,I,A="")=>`
          let outputIndices${I} = ${_.offsetToIndices(`outputOffset + ${I}u`)};
          ${x(I)};
          let offset${I} = ${g.indicesToOffset(`dataIndices${I}`)};
          let index${I} = offset${I} / 4u;
          let component${I} = offset${I} % 4u;
          ${C}[${I}] = ${A}(${g.getByOffset(`index${I}`)}[component${I}]);
        `;v=`
        let outputOffset = global_idx * ${l};
        var value = vec4<u32>(0);
        ${w("value",0,"u32")}
        ${w("value",1,"u32")}
        ${w("value",2,"u32")}
        ${w("value",3,"u32")}
        ${_.setByOffset("global_idx","value")}
      `}else v=`
      let outputIndices = ${_.offsetToIndices("global_idx")};
      ${x("")};
      let value = ${g.getByIndices("dataIndices")};
      ${_.setByOffset("global_idx","value")};
      `;return`
      ${m.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(g,b,_)}
      ${m.mainStart()}
        ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${v}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c}),getShaderSource:f}},Ml=e=>ce({axis:e.axis}),Vl=(e,t)=>{let r=e.inputs;Dl(r),e.compute(Wl(e.inputs,t))}}),Gl,Ul,Pl,Vh=M(()=>{Q(),re(),ne(),Gl=(e,t,r,i,a,n,s,u,l)=>{let d=[{type:12,data:n},{type:12,data:i},{type:12,data:a},{type:12,data:r},{type:12,data:s},{type:12,data:u},{type:12,data:l}],c=[n];d.push(...j(t.dims,c));let f=m=>{let g=O("indices_data",t.dataType,t.dims.length),b=H("input_slice_offsets_data",12,1,1),_=[g,b],x=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:a.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${m.registerUniforms(x).declareVariables(..._)}
  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${a.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${a.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:c,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:d}),getShaderSource:f},{inputs:[t],outputs:[-1]})[0]},Ul=(e,t)=>{let r=e.inputs,i=r[0].dims,a=r[0].dataType,n=r[1].dims,s=n[n.length-1],u=E.sizeToDimension(n,n.length-1),l=E.sizeFromDimension(i,t.batchDims+s),d=E.sizeToDimension(i,t.batchDims),c=E.sizeFromDimension(i,t.batchDims),f=u/d,m=new Array(s),g=l;for(let I=0;I<s;++I)m[s-1-I]=g,g*=i[t.batchDims+s-1-I];let b=Gl(e,r[1],m,t.batchDims,i,u,f,c,s),_=t.batchDims+s;if(_>i.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let x=n.slice(0,-1).concat(i.slice(_)),v=E.size(x),w=[{type:12,data:v},{type:12,data:l},...j(r[0].dims,b.dims,x)],C=I=>{let A=O("data",r[0].dataType,r[0].dims.length),T=O("slice_offsets",12,b.dims.length),S=H("output",r[0].dataType,x.length);return`
          ${I.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(A,T,S)}
            ${I.mainStart()}
            ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:x,dataType:a}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:w}),getShaderSource:C},{inputs:[r[0],b]})},Pl=e=>({batchDims:e.batch_dims,cacheKey:""})}),Ll,Zl,Hl,Fl,Gh=M(()=>{Q(),re(),we(),ne(),Ll=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=E.normalizeAxis(t.quantizeAxis,e[0].dims.length),i=t.blockSize,a=e[0],n=e[2],s=e.length===4?e[3]:void 0;if(n.dims.length!==a.dims.length||!a.dims.map((u,l)=>l===r?Math.ceil(u/i)===n.dims[l]:u===n.dims[l]).reduce((u,l)=>u&&l,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==a.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==n.dims.length||!s.dims.map((u,l)=>u===n.dims[l]).reduce((u,l)=>u&&l,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},Zl=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r.length,n=E.normalizeAxis(t.gatherAxis,a),s=E.normalizeAxis(t.quantizeAxis,a),u=r.slice(0);u.splice(n,1,...i);let l=E.size(u),d=e[2].dataType,c=e[0].dataType===22,f=[{type:12,data:l},{type:12,data:s},{type:12,data:n},{type:12,data:t.blockSize},...j(...e.map((g,b)=>g.dims),u)],m=g=>{let b=O("data",e[0].dataType,e[0].dims.length),_=O("inputIndices",e[1].dataType,e[1].dims.length),x=O("scales",e[2].dataType,e[2].dims.length),v=e.length>3?O("zeroPoint",e[3].dataType,e[3].dims.length):void 0,w=H("output",d,u.length),C=[b,_,x];v&&C.push(v);let I=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${g.registerUniforms(I).declareVariables(...C,w)}
        ${g.mainStart()}
        let output_indices = ${w.offsetToIndices("global_idx")};
        var indices_indices = ${_.type.indices}(0);
        ${i.length>1?`
          for (var i: u32 = 0; i < ${i.length}; i++) {
            let index = ${w.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${_.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${w.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${b.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${w.indicesGet("output_indices","i")};
          ${b.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${_.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[n]};
        }
        ${b.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${u.length}; i++) {
          let index = ${w.indicesGet("output_indices",`i + ${i.length} - 1`)};
          ${b.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${b.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${b.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${x.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${x.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${x.getByIndices("scale_indices")};
        ${v?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${v.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${v.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${ke(d)}(quantized_data - zero_point) * scale;
        ${w.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((g,b)=>b!==1).map(g=>g.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(g,b)=>"rank")},getRunData:()=>({outputs:[{dims:u,dataType:d}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:f}),getShaderSource:m}},Hl=(e,t)=>{let r=e.inputs;Ll(r,t),e.compute(Zl(e.inputs,t))},Fl=e=>ce({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),ql,Kl,jl,Xl,Uh=M(()=>{Q(),re(),we(),ne(),ql=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},Kl=(e,t)=>{let r=e[0].dims,i=e[0].dataType,a=r.length,n=e[1].dims,s=e[1].dataType,u=E.normalizeAxis(t.axis,a),l=r[u],d=n.slice(0),c=E.size(d),f=O("input",i,a),m=O("indicesInput",s,n.length),g=H("output",i,d.length),b=[{type:12,data:c},{type:6,data:l},{type:12,data:u}];return b.push(...j(r,n,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:b}),getShaderSource:_=>`
      ${_.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(f,m,g)}
      ${_.mainStart()}
      ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${g.offsetToIndices("global_idx")};

      var idx = ${m.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${f.type.indices}(outputIndices);
      ${f.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${f.getByIndices("inputIndices")};

      ${g.setByOffset("global_idx","value")};
  }`}},jl=e=>ce({axis:e.axis}),Xl=(e,t)=>{let r=e.inputs;ql(r),e.compute(Kl(e.inputs,t))}}),Jl,Yl,Ql,ed,Ph=M(()=>{Q(),re(),ne(),Jl=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},Yl=(e,t)=>{let r=e[0].dims.slice(),i=e[1].dims.slice(),[a,n,s]=us.getShapeOfGemmResult(r,t.transA,i,t.transB,e.length===3?e[2].dims:void 0),u=[a,n];if(!u)throw new Error("Can't use gemm on the given tensors");let l=16,d=Math.ceil(n/l),c=Math.ceil(a/l),f=!0,m=E.size(u),g=[{type:12,data:f?d:m},{type:12,data:a},{type:12,data:n},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],b=["type","type"];e.length===3&&(g.push(...j(e[2].dims)),b.push("rank")),g.push(...j(u));let _=v=>{let w="";t.transA&&t.transB?w="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?w="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?w="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(w="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let C=t.alpha===1?"":"value *= uniforms.alpha;",I=O("a",e[0].dataType,e[0].dims),A=O("b",e[1].dataType,e[1].dims),T=I.type.value,S=null,z=[I,A];e.length===3&&(S=O("c",e[2].dataType,e[2].dims.length),z.push(S));let D=H("output",e[0].dataType,u.length);z.push(D);let U=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${v.registerUniforms(U).declareVariables(...z)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${T}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${w}
    }

    ${C}
    ${S!=null?`let cOffset = ${S.broadcastedIndicesToOffset("vec2(m, n)",D)}; value += ${T}(uniforms.beta) * ${S.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},x=v=>{let w=O("a",e[0].dataType,e[0].dims),C=O("b",e[1].dataType,e[1].dims),I=null,A=[w,C];e.length===3&&(I=O("c",e[2].dataType,e[2].dims.length),A.push(I));let T=H("output",e[0].dataType,u.length);A.push(T);let S=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],z="",D="";t.transA&&t.transB?(D=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${C.type.value}(0);
      }
      `,z="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(D=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${C.type.value}(0);
      }
      `,z="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(D=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${C.type.value}(0);
      }
      `,z="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(D=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${C.type.value}(0);
      }
      `,z="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let U=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${v.registerUniforms(S).declareVariables(...A)}
  var<workgroup> tile_a: array<array<${w.type.storage}, ${l}>, ${l}>;
  var<workgroup> tile_b: array<array<${C.type.storage}, ${l}>, ${l}>;
  ${v.mainStart([l,l,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${l};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${l};
    let num_tiles = (uniforms.K - 1) / ${l} + 1;
    var k_start = 0u;
    var value = ${T.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${D}
      k_start = k_start + ${l};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${l}; k++) {
        ${z}
      }
      workgroupBarrier();
    }

    ${U}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${I!=null?`let cOffset = ${I.broadcastedIndicesToOffset("vec2(m, n)",T)}; value += ${T.type.value}(uniforms.beta) * ${I.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return f?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:d*c},programUniforms:g}),getShaderSource:x}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:g}),getShaderSource:_}},Ql=e=>{let t=e.transA,r=e.transB,i=e.alpha,a=e.beta;return{transA:t,transB:r,alpha:i,beta:a,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},ed=(e,t)=>{Jl(e.inputs),e.compute(Yl(e.inputs,t))}}),Ke,et,vt,It,td,rd,id,ad,nd,sd,od,ud,ld,dd,Lh=M(()=>{Q(),re(),we(),ne(),[Ke,et,vt,It]=[0,1,2,3],td=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},rd=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,id=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,ad=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,nd=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,sd=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${Ke}] = batch;
     indices[${et}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${vt}] = u32(r);
            indices[${It}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${vt}] = u32(clamp(r, 0, H - 1));
          indices[${It}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${vt}] = gs_reflect(r, border[1], border[3]);
          indices[${It}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,od=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${Ke}], indices[${et}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${Ke}], indices[${et}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${Ke}], indices[${et}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${Ke}], indices[${et}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${Ke}], indices[${et}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${Ke}], indices[${et}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,ud=(e,t)=>{let r=O("x",e[0].dataType,e[0].dims.length),i=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],a=O("grid",e[1].dataType,i.length,2),n=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(n=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[Ke,et,vt,It]=[0,3,1,2]);let s=H("output",e[0].dataType,n.length),u=r.type.value,l=E.size(n),d=[{type:12,data:l},...j(e[0].dims,i,n)],c=f=>`
  ${f.registerUniform("output_size","u32").declareVariables(r,a,s)}
  ${rd}
  ${id(u)}
  ${ad(t)}
  ${nd(t)}
  ${sd(r,u,t)}

  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${vt}]);
      let W_in = i32(uniforms.x_shape[${It}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${s.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${Ke}], indices[${vt}], indices[${It}]);
      let nxy = ${a.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${od(s,u,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:f=>{let m=E.size(n);return{outputs:[{dims:n,dataType:f[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:d}},getShaderSource:c}},ld=(e,t)=>{td(e.inputs),e.compute(ud(e.inputs,t))},dd=e=>ce({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),Se,pd,cd,ia,fd,qt,hd,md=M(()=>{Q(),re(),we(),Ii(),Ri(),ne(),nt(),Se=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,pd=(e,t)=>{let r=e[0],i=Se(e,1),a=Se(e,2),n=Se(e,3),s=Se(e,4),u=Se(e,5),l=Se(e,6),d=Se(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let c=r.dims[0],f=r.dims[1],m=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],g=f,b=0,_=0,x=Math.floor(m/t.numHeads);if(l&&d&&E.size(l.dims)&&E.size(d.dims)){if(l.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(l.dims[0]!==c||l.dims[1]!==t.numHeads||l.dims[3]!==x)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[0]!==c||d.dims[1]!==t.numHeads||d.dims[3]!==x)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[2]!==d.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');b=l.dims[2],_=l.dims[2]}else if(l&&E.size(l.dims)||d&&E.size(d.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v;if(i&&E.size(i.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(i.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');v=2,g=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==x)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');v=5,g=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==x)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');v=0,g=i.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}if(n&&E.size(n.dims)>0){if(n.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(i&&i.dims.length===5&&i.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let w=b+g,C=0;if(s&&E.size(s.dims)>0){C=8;let S=s.dims;throw S.length===1?S[0]===c?C=1:S[0]===3*c+2&&(C=3):S.length===2&&S[0]===c&&S[1]===w&&(C=5),C===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let I=!1,A=m;if(a&&E.size(a.dims)>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(g!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');A=a.dims[2]}else{if(g!==a.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');A=a.dims[1]*a.dims[3],I=!0}}let T=!1;if(s&&E.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(u&&E.size(u.dims)>0){if(u.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(u.dims[0]!==c||u.dims[1]!==t.numHeads||u.dims[2]!==f||u.dims[3]!==w)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:c,sequenceLength:f,pastSequenceLength:b,kvSequenceLength:g,totalSequenceLength:w,maxSequenceLength:_,inputHiddenSize:0,hiddenSize:m,vHiddenSize:A,headSize:x,vHeadSize:Math.floor(A/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:C,scale:t.scale,broadcastResPosBias:T,passPastInKv:I,qkvFormat:v}},cd=e=>ce({...e}),ia=ce({perm:[0,2,1,3]}),fd=(e,t,r,i,a,n,s)=>{let u=[i,a,n],l=E.size(u),d=[{type:12,data:l},{type:12,data:s},{type:12,data:n}],c=f=>{let m=H("qkv_with_bias",t.dataType,u),g=O("qkv",t.dataType,u),b=O("bias",r.dataType,u),_=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${f.registerUniforms(_).declareVariables(g,b,m)}
  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:u,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:c},{inputs:[t,r],outputs:[-1]})[0]},qt=(e,t,r,i,a,n,s,u)=>{let l=n;if(s&&E.size(s.dims)>0){if(i===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return l=fd(e,n,s,t,i,r*a,u),l=l.reshape([t,i,r,a]),r===1||i===1?l:e.compute(Oe(l,ia.perm),{inputs:[l],outputs:[-1]})[0]}else return n.dims.length===3&&(l=n.reshape([t,i,r,a])),r===1||i===1?l:e.compute(Oe(l,ia.perm),{inputs:[l],outputs:[-1]})[0]},hd=(e,t)=>{let r=pd(e.inputs,t),i=e.inputs[0],a=Se(e.inputs,1),n=Se(e.inputs,2),s=Se(e.inputs,3),u=Se(e.inputs,4),l=Se(e.inputs,5),d=Se(e.inputs,6),c=Se(e.inputs,7);if(i.dims.length===5)throw new Error("Packed QKV is not implemented");if(a?.dims.length===5)throw new Error("Packed KV is not implemented");let f=a&&n&&a.dims.length===4&&n.dims.length===4,m=qt(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,i,s,0);if(f)return Pt(e,m,a,n,u,void 0,d,c,l,r);if(!a||!n)throw new Error("key and value must be provided");let g=qt(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,a,s,r.hiddenSize),b=qt(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,n,s,2*r.hiddenSize);Pt(e,m,g,b,u,void 0,d,c,l,r)}}),gd,bd,yd,_d,aa,wd,$d,vd=M(()=>{Q(),re(),we(),ne(),gd=e=>{if(!e||e.length<1)throw new Error("too few inputs")},bd=(e,t)=>{let r=[],i=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(a=>r.push(Number(a))),i=r.length),ce({numOutputs:i,axis:t.axis,splitSizes:r})},yd=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${F("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,_d=e=>{let t=e.length,r=[];for(let i=0;i<t;++i){let a=e[i].setByIndices("indices","input[global_idx]");t===1?r.push(a):i===0?r.push(`if (output_number == ${i}u) { ${a} }`):i===t-1?r.push(`else { ${a} }`):r.push(`else if (output_number == ${i}) { ${a} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},aa=(e,t)=>{let r=e[0].dims,i=E.size(r),a=e[0].dataType,n=E.normalizeAxis(t.axis,r.length),s=new Array(t.numOutputs),u=O("input",a,r.length),l=new Array(t.numOutputs),d=[],c=[],f=0,m=[{type:12,data:i}];for(let b=0;b<t.numOutputs;b++){f+=t.splitSizes[b],l[b]=f;let _=r.slice();_[n]=t.splitSizes[b],c.push(_),s[b]=H(`output${b}`,a,_.length),d.push({dims:c[b],dataType:e[0].dataType})}m.push({type:12,data:l},...j(r,...c));let g=b=>`
  ${b.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",l.length).declareVariables(u,...s)}
  ${yd(l.length)}
  ${_d(s)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${u.offsetToIndices("global_idx")};
    var index = ${u.indicesGet("indices",n)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${F("uniforms.size_in_split_axis","output_number - 1u",l.length)};
      ${u.indicesSet("indices",n,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:g,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(i/64)},programUniforms:m})}},wd=(e,t)=>{gd(e.inputs);let r=e.inputs.length===1?t:bd(e.inputs,t);e.compute(aa(e.inputs,r),{inputs:[0]})},$d=e=>{let t=e.axis,r=e.splitSizes,i=e.numOutputs<0?r.length:e.numOutputs;if(i!==r.length)throw new Error("numOutputs and splitSizes lengh must be equal");return ce({axis:t,numOutputs:i,splitSizes:r})}}),Id,Ir,xd,Cd=M(()=>{Q(),re(),we(),ne(),Id=(e,t)=>{let[r,i,a,n]=e,{numHeads:s,rotaryEmbeddingDim:u}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!E.areEqual(i.dims,[])&&!E.areEqual(i.dims,[1])&&i.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(n.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${n.dims.length}`);if(!E.areEqual(a.dims,n.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(u>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let l=r.dims[0],d=r.dims[r.dims.length-2],c=a.dims[0],f=E.sizeFromDimension(r.dims,1)/d,m=u===0?a.dims[1]*2:f/s;if(u>m)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(i.dims.length===2){if(l!==i.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${i.dims[0]}`);if(d!==i.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${i.dims[1]}`)}if(m/2!==a.dims[1]&&u/2!==a.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${a.dims[1]}`);if(d>c)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},Ir=(e,t)=>{let{interleaved:r,numHeads:i,rotaryEmbeddingDim:a,scale:n}=t,s=e[0].dims[0],u=E.sizeFromDimension(e[0].dims,1),l=e[0].dims[e[0].dims.length-2],d=u/l,c=e[2].dims[1],f=a===0?c*2:d/i,m=new Array(s,l,d/f,f-c),g=E.computeStrides(m),b=[{type:1,data:n},{type:12,data:m},{type:12,data:g},...e[0].dims.length===3?new Array({type:12,data:[u,d,f,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[u,f,l*f,1]}):[],...j(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],_=x=>{let v=O("input",e[0].dataType,e[0].dims.length),w=O("position_ids",e[1].dataType,e[1].dims.length),C=O("cos_cache",e[2].dataType,e[2].dims.length),I=O("sin_cache",e[3].dataType,e[3].dims.length),A=H("output",e[0].dataType,e[0].dims.length);return x.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:m.length},{name:"global_strides",type:"u32",length:g.length},{name:"input_output_strides",type:"u32",length:g.length}]),`
        ${x.declareVariables(v,w,C,I,A)}

        ${x.mainStart(Et)}
          let half_rotary_emb_dim = uniforms.${C.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${x.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${w.broadcastedIndicesToOffset("bsnh.xy",H("",w.type.tensor,2))};
            let position_id =
                u32(${w.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${v.getByOffset("i")} * ${C.get("position_id","bsnh[3]")} -
                ${v.getByOffset("j")} * ${I.get("position_id","bsnh[3]")};
            ${A.setByOffset("i","re")}
            let im = ${v.getByOffset("i")} * ${I.get("position_id","bsnh[3]")} +
                ${v.getByOffset("j")} * ${C.get("position_id","bsnh[3]")};
            ${A.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${A.setByOffset("k",v.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:ce({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:_,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(E.size(m)/Et)},programUniforms:b})}},xd=(e,t)=>{Id(e.inputs,t),e.compute(Ir(e.inputs,t))}}),Ad,kd,na,Sd,Td,Zh=M(()=>{we(),Q(),Ri(),md(),vd(),nt(),Cd(),ne(),Ad=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],i=e[1],a=e[2],n=e[3],s=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let u=!1,l=r.dims[0],d=r.dims[1],c=r.dims.length===3?u?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],f=d,m=0,g=!i||i.dims.length===0,b=Math.floor(g?c/(t.numHeads+2*t.kvNumHeads):c/t.numHeads);g&&(c=b*t.numHeads);let _=n&&n.dims.length!==0,x=s&&s.dims.length!==0;if(_&&n.dims.length===4&&n.dims[0]===l&&n.dims[1]!==t.kvNumHeads&&n.dims[2]===t.kvNumHeads&&n.dims[3]===b)throw new Error("BSNH pastKey/pastValue is not supported");if(_&&x){if(n.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');m=n.dims[2]}else if(_||x)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v=1;if(i&&i.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(r.dims[2]%i.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');f=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==b)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');f=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==b)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');f=i.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}let w=0,C=!1,I=t.kvNumHeads?b*t.kvNumHeads:c;if(a&&a.dims.length>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(f!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');I=a.dims[2]}else{if(f!==a.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');I=a.dims[1]*a.dims[3],C=!0}}let A=e.length>4?e[5]:void 0;if(A&&A.dims.length!==1&&A.dims[0]!==l)throw new Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');return{batchSize:l,sequenceLength:d,pastSequenceLength:m,kvSequenceLength:f,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:c,vHiddenSize:I,headSize:b,vHeadSize:Math.floor(I/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:w,scale:t.scale,broadcastResPosBias:!1,passPastInKv:C,qkvFormat:v}},kd=ce({perm:[0,2,1,3]}),na=(e,t,r)=>{let i=t,a=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(i=t.reshape([r.batchSize,r.kvSequenceLength,a,r.headSize]),i=e.compute(Oe(i,kd.perm),{inputs:[i],outputs:[-1]})[0]),i},Sd=(e,t,r,i)=>{let a=7,n=["type","type"],s=[e*t],u=e*t,l=[{type:12,data:u},{type:12,data:t},{type:12,data:e}],d=c=>{let f=O("seq_lens",r.dataType,r.dims),m=O("total_seq_lens",i.dataType,i.dims),g=H("pos_ids",a,s),b=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${c.registerUniforms(b).declareVariables(f,m,g)}
  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${m.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${f.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${g.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${g.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${g.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:n},getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l}),getShaderSource:d}},Td=(e,t)=>{let r=Ad(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(e.inputs[1]?.dims.length===5)throw new Error("Packed KV is not implemented");let i=e.inputs[0],a=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,n=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,u=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,l=e.inputs.length>4?e.inputs[5]:void 0,d=e.inputs.length>5?e.inputs[6]:void 0,c=r.kvNumHeads?r.kvNumHeads:r.numHeads,f=ce({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,c*r.headSize,c*r.headSize]}),[m,g,b]=!a&&!n?e.compute(aa([i],f),{inputs:[i],outputs:[-1,-1,-1]}):[i,a,n],_,x;if(t.doRotary){let I=e.compute(Sd(r.batchSize,r.sequenceLength,l,d),{inputs:[l,d],outputs:[-1]})[0],A=e.inputs[7],T=e.inputs[8],S=ce({interleaved:t.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),z=[m,I,A,T],D=[-1];_=e.compute(Ir(z,S),{inputs:z,outputs:D})[0],z.splice(0,1,g);let U=ce({interleaved:t.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});x=e.compute(Ir(z,U),{inputs:z,outputs:D})[0]}let v=qt(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t.doRotary?_:m,void 0,0),w=na(e,t.doRotary?x:g,r),C=na(e,b,r);Pt(e,v,w,C,void 0,void 0,s,u,void 0,r,l,d)}}),sa,Ed,zd,Bd,Hh=M(()=>{Q(),re(),nt(),ne(),sa=(e,t,r,i,a,n,s,u)=>{let l=_e(n),d=l===1?"f32":`vec${l}f`,c=l===1?"vec2f":`mat2x${l}f`,f=a*s,m=64;f===1&&(m=256);let g=[a,s,n/l],b=[a,s,2],_=["rank","type","type"],x=[];x.push(...j(g,b));let v=w=>{let C=O("x",t.dataType,3,l),I=O("scale",r.dataType,r.dims),A=O("bias",i.dataType,i.dims),T=H("output",1,3,2),S=[C,I,A,T];return`
  var<workgroup> workgroup_shared : array<${c}, ${m}>;
  const workgroup_size = ${m}u;
  ${w.declareVariables(...S)}
  ${w.mainStart(m)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${d}(0);
    var squared_sum = ${d}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${d}(${C.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${c}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${at("workgroup_shared[0][0]",l)} / f32(hight * ${l});
      let squared_sum_final = ${at("workgroup_shared[0][1]",l)} / f32(hight * ${l});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${u}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${l};${u};${m}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:b,dataType:1}],dispatchGroup:{x:f},programUniforms:x}),getShaderSource:v},{inputs:[t,r,i],outputs:[-1]})[0]},Ed=(e,t,r)=>{let i=t[0].dims,a=i,n=2,s=i[0],u=i[1],l=E.sizeFromDimension(i,n),d=_e(l),c=E.size(a)/d,f=sa(e,t[0],t[1],t[2],s,l,u,r.epsilon),m=[s,u,l/d],g=[s,u],b=["type","none"],_=x=>{let v=O("x",t[0].dataType,m.length,d),w=O("scale_shift",1,g.length,2),C=H("output",t[0].dataType,m.length,d),I=[v,w,C];return`
  ${x.registerUniform("output_size","u32").declareVariables(...I)}
  ${x.mainStart()}
  ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${C.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${w.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${v.getByOffset("global_idx")} * ${C.type.value}(scale_shift.x) + ${C.type.value}(scale_shift.y);
      ${C.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${d}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:[{type:12,data:c},...j(m,g,m)]}),getShaderSource:_},{inputs:[t[0],f]})},zd=(e,t,r)=>{let i=t[0].dims,a=i,n=i[0],s=i[i.length-1],u=E.sizeFromDimension(i,1)/s,l=_e(s),d=E.size(a)/l,c=[{type:12,data:u},{type:12,data:Math.floor(s/l)}],f=["type","type"],m=!1,g=[0,i.length-1];for(let v=0;v<i.length-2;v++)m=m||i[v+1]!==1,g.push(v+1);m=m&&i[i.length-1]!==1;let b=m?e.compute(Oe(e.inputs[0],g),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:i.length},(v,w)=>i[g[w]])),_=sa(e,b,t[1],t[2],n,u,s,r.epsilon),x=v=>{let w=xe(t[0].dataType),C=l===1?"vec2f":`mat${l}x2f`,I=S=>{let z=S===0?"x":"y",D=l===1?"f32":`vec${l}f`;switch(l){case 1:return`${w}(${D}(scale.${z}))`;case 2:return`vec2<${w}>(${D}(scale[0].${z}, scale[1].${z}))`;case 4:return`vec4<${w}>(${D}(scale[0].${z}, scale[1].${z}, scale[2].${z}, scale[3].${z}))`;default:throw new Error(`Not supported compoents ${l}`)}},A=O("input",t[0].dataType,t[0].dims,l),T=H("output",t[0].dataType,a,l);return`
  @group(0) @binding(0) var<storage, read> input : array<${A.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${C}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${T.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${v.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${I(0)}, ${I(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${l}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c}),getShaderSource:x},{inputs:[t[0],_]})},Bd=(e,t)=>{t.format==="NHWC"?zd(e,e.inputs,t):Ed(e,e.inputs,t)}}),Od,Rd,Nd,Fh=M(()=>{Q(),re(),ne(),Od=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Rd=(e,t,r)=>{let i=t.simplified,a=e[0].dims,n=e[1],s=!i&&e[2],u=a,l=E.normalizeAxis(t.axis,a.length),d=E.sizeToDimension(a,l),c=E.sizeFromDimension(a,l),f=E.size(n.dims),m=s?E.size(s.dims):0;if(f!==c||s&&m!==c)throw new Error(`Size of X.shape()[axis:] == ${c}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${f} and bias size of ${m}`);let g=[];for(let A=0;A<a.length;++A)A<l?g.push(a[A]):g.push(1);let b=_e(c),_=["type","type"],x=[{type:12,data:d},{type:1,data:c},{type:12,data:Math.floor(c/b)},{type:1,data:t.epsilon}];s&&_.push("type");let v=r>1,w=r>2,C=A=>{let T=xe(e[0].dataType),S=[O("x",e[0].dataType,e[0].dims,b),O("scale",n.dataType,n.dims,b)];s&&S.push(O("bias",s.dataType,s.dims,b)),S.push(H("output",e[0].dataType,u,b)),v&&S.push(H("mean_data_output",1,g)),w&&S.push(H("inv_std_output",1,g));let z=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${A.registerUniforms(z).declareVariables(...S)}
  ${A.mainStart()}
    ${A.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${ki("f32",b)};
    var mean_square_vector = ${ki("f32",b)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${zt(T,b,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${at("mean_vector",b)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${at("mean_square_vector",b)} / uniforms.norm_size ${i?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${zt(T,b,"x[j + offset]")};
      let f32scale = ${zt(T,b,"scale[j]")};
      output[j + offset] = ${S[0].type.value}((f32input ${i?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${zt(T,b,"bias[j]")}`:""}
      );
    }

    ${v?"mean_data_output[global_idx] = mean":""};
    ${w?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},I=[{dims:u,dataType:e[0].dataType}];return v&&I.push({dims:g,dataType:1}),w&&I.push({dims:g,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${b};${r};${i}`,inputDependencies:_},getRunData:()=>({outputs:I,dispatchGroup:{x:Math.ceil(d/64)},programUniforms:x}),getShaderSource:C}},Nd=(e,t)=>{Od(e.inputs),e.compute(Rd(e.inputs,t,e.outputCount))}}),Dd,Wd,qh=M(()=>{re(),Pi(),Fi(),Dd=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Wd=e=>{Dd(e.inputs);let t=Tt.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],i=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&i<8)e.compute(Ui(e.inputs,{activation:""},t));else{let a=t[t.length-2],n=E.size(e.inputs[0].dims.slice(0,-2)),s=E.size(e.inputs[1].dims.slice(0,-2));if(n!==1&&a===1&&s===1){let u=e.inputs[0].reshape([1,n,i]),l=e.inputs[1].reshape([1,i,r]),d=[1,n,r],c=[u,l];e.compute(_r(c,{activation:""},t,d),{inputs:c})}else e.compute(_r(e.inputs,{activation:""},t))}}}),Md,Vd,Gd,Ud,Pd,Kh=M(()=>{Q(),re(),we(),ne(),Md=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],i=r.dims.length;if(r.dims[i-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let a=Math.floor((t.k+t.blockSize-1)/t.blockSize),n=t.blockSize/8*t.bits,s=e[1];if(!E.areEqual(s.dims,[t.n,a,n]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let u=e[2].dims;if(E.size(u)!==t.n*a)throw new Error("scales input size error.");if(e.length===4){let l=e[3].dims,d=t.bits>4?t.n*a:t.n*Math.floor((a+1)/2);if(E.size(l)!==d)throw new Error("zeroPoints input size error.")}},Vd=(e,t)=>{let r=e[0].dims,i=r.length,a=r[i-2],n=t.k,s=t.n,u=r.slice(0,i-2),l=E.size(u),d=e[1].dims[2]/4,c=e[0].dataType,f=_e(t.k),m=_e(d),g=_e(s),b=u.concat([a,s]),_=a>1&&s/g%2===0?2:1,x=E.size(b)/g/_,v=64,w=[],C=[l,a,n/f],I=E.convertShape(e[1].dims).slice();I.splice(-1,1,d/m),w.push(...j(C)),w.push(...j(I)),w.push(...j(e[2].dims)),e.length===4&&w.push(...j(E.convertShape(e[3].dims)));let A=[l,a,s/g];w.push(...j(A));let T=S=>{let z=C.length,D=O("a",e[0].dataType,z,f),U=O("b",12,I.length,m),X=O("scales",e[2].dataType,e[2].dims.length),Z=[D,U,X],ee=e.length===4?O("zero_points",12,e[3].dims.length):void 0;ee&&Z.push(ee);let V=A.length,ie=H("output",e[0].dataType,V,g),J=xe(e[0].dataType),L=(()=>{switch(f){case 1:return`array<${J}, 8>`;case 2:return`mat4x2<${J}>`;case 4:return`mat2x4<${J}>`;default:throw new Error(`${f}-component is not supported.`)}})(),oe=()=>{let N=`
          // reuse a data
            var input_offset = ${D.indicesToOffset(`${D.type.indices}(batch, row, word_offset)`)};
            var a_data: ${L};
            for (var j: u32 = 0; j < ${8/f}; j++) {
              a_data[j] = ${D.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let G=0;G<g*_;G++)N+=`
            b_value = ${m===1?`b${G}_data`:`b${G}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${L}(${Array.from({length:4},(te,B)=>`${J}(b_value_lower[${B}]), ${J}(b_value_upper[${B}])`).join(", ")});
            b_dequantized_values = ${f===1?`${L}(${Array.from({length:8},(te,B)=>`(b_quantized_values[${B}] - ${ee?`zero_point${G}`:"zero_point"}) * scale${G}`).join(", ")});`:`(b_quantized_values - ${L}(${Array(8).fill(`${ee?`zero_point${G}`:"zero_point"}`).join(",")})) * scale${G};`};
            workgroup_shared[local_id.x * ${_} + ${Math.floor(G/g)}]${g>1?`[${G%g}]`:""} += ${Array.from({length:8/f},(te,B)=>`${f===1?`a_data[${B}] * b_dequantized_values[${B}]`:`dot(a_data[${B}], b_dequantized_values[${B}])`}`).join(" + ")};
          `;return N},q=()=>{let N=`
            var col_index = col * ${g};
            ${ee?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${J}(8);`}
            `;for(let G=0;G<g*_;G++)N+=`
            let scale${G} = ${X.getByOffset("col_index * nBlocksPerCol + block")};
            ${ee?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${ee.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${G} = ${J}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return N},ue=()=>{let N=`col_index = col * ${g};`;for(let G=0;G<g*_;G++)N+=`
            let b${G}_data = ${U.getByIndices(`${U.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return N+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${L};
            var b_dequantized_values: ${L};`,N};return`
        var<workgroup> workgroup_shared: array<${ie.type.value}, ${_*v}>;
        ${S.declareVariables(...Z,ie)}
        ${S.mainStart([v,1,1])}
          let output_indices = ${ie.offsetToIndices(`(global_idx / ${v}) * ${_}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${v}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/f};
            ${q()}
            for (var word: u32 = 0; word < ${d}; word += ${m}) {
              ${ue()}
              for (var i: u32 = 0; i < ${m}; i++) {
                ${oe()}
                word_offset += ${8/f};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${_}) {
            var output_value: ${ie.type.value} = ${ie.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${v}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${_};
            }
            ${ie.setByIndices(`${ie.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${f};${m};${g};${_};${v}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:b,dataType:c}],dispatchGroup:{x},programUniforms:w}),getShaderSource:T}},Gd=(e,t)=>{let r=e[0].dims,i=r.length,a=r[i-2],n=t.k,s=t.n,u=r.slice(0,i-2),l=E.size(u),d=e[1].dims[2]/4,c=e[0].dataType,f=_e(t.k),m=_e(d),g=u.concat([a,s]),b=128,_=s%8===0?8:s%4===0?4:1,x=b/_,v=x*m*8,w=v/f,C=v/t.blockSize,I=E.size(g)/_,A=[],T=[l,a,n/f],S=E.convertShape(e[1].dims).slice();S.splice(-1,1,d/m),A.push(...j(T)),A.push(...j(S)),A.push(...j(e[2].dims)),e.length===4&&A.push(...j(E.convertShape(e[3].dims)));let z=[l,a,s];A.push(...j(z));let D=U=>{let X=T.length,Z=O("a",e[0].dataType,X,f),ee=O("b",12,S.length,m),V=O("scales",e[2].dataType,e[2].dims.length),ie=[Z,ee,V],J=e.length===4?O("zero_points",12,e[3].dims.length):void 0;J&&ie.push(J);let L=z.length,oe=H("output",e[0].dataType,L),q=xe(e[0].dataType),ue=()=>{switch(f){case 1:return`
          let a_data0 = vec4<${q}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${q}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${q}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${q}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${f}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${Z.type.value}, ${w}>;
        var<workgroup> inter_results: array<array<${oe.type.value}, ${x}>, ${_}>;
        ${U.declareVariables(...ie,oe)}
        ${U.mainStart([x,_,1])}
          let output_indices = ${oe.offsetToIndices(`workgroup_index * ${_}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${C} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${w};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${w}; a_offset += ${b})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${Z.getByIndices(`${Z.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${Z.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${C} + local_id.x;
            ${J?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${J.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${q}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${q}(8);`}
            let scale = ${V.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${ee.getByIndices(`${ee.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/f};
            for (var i: u32 = 0; i < ${m}; i++) {
              ${ue()}
              let b_value = ${m===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${q}>(${Array.from({length:4},(N,G)=>`${q}(b_value_lower[${G}]), ${q}(b_value_upper[${G}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${q}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(N,G)=>`${`dot(a_data${G}, b_dequantized_values[${G}])`}`).join(" + ")};
              word_offset += ${8/f};
            }
            workgroupBarrier();
          }

          if (local_idx < ${_}) {
            var output_value: ${oe.type.value} = ${oe.type.value}(0);
            for (var b = 0u; b < ${x}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${oe.setByIndices(`${oe.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${f};${m};${x};${_}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:g,dataType:c}],dispatchGroup:{x:I},programUniforms:A}),getShaderSource:D}},Ud=(e,t)=>{Md(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Gd(e.inputs,t)):e.compute(Vd(e.inputs,t))},Pd=e=>ce(e)}),Ld,Zd,Hd,Fd,qd,Kd,jd,Xd,Jd,jh=M(()=>{Q(),re(),ne(),Ld=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Zd=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
            k = i32(${e.indicesGet("indices",a)}) - ${F("uniforms.pads",a,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${F("uniforms.x_shape",a,t)})) {
              break;
            }
            offset += k * i32(${F("uniforms.x_strides",a,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${i}
            value = x[offset];
          }
      `},Hd=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${F("uniforms.pads",a,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${F("uniforms.x_shape",a,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${F("uniforms.x_shape",a,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${F("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Fd=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${F("uniforms.pads",a,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${F("uniforms.x_shape",a,t)})) {
                  k = i32(${F("uniforms.x_shape",a,t)}) - 1;
                }
                offset += k * i32(${F("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},qd=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${F("uniforms.pads",a,r)};
                if (k < 0)  {
                  k += i32(${F("uniforms.x_shape",a,t)}]);
                }
                if (k >= i32(${F("uniforms.x_shape",a,t)})) {
                  k -= i32(${F("uniforms.x_shape",a,t)});
                }
                offset += k * i32(${F("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Kd=(e,t,r)=>{switch(r.mode){case 0:return Zd(e,t,r.pads.length);case 1:return Hd(e,t,r.pads.length);case 2:return Fd(e,t,r.pads.length);case 3:return qd(e,t,r.pads.length);default:throw new Error("Invalid mode")}},jd=(e,t)=>{let r=E.padShape(e[0].dims.slice(),t.pads),i=e[0].dims,a=E.size(r),n=[{type:12,data:a},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&n.push({type:s?e[2].dataType:1,data:t.value}),n.push(...j(e[0].dims,r));let u=["rank"],l=d=>{let c=H("output",e[0].dataType,r.length),f=O("x",e[0].dataType,i.length),m=f.type.value,g=Kd(c,i.length,t),b=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&b.push({name:"constant_value",type:s?m:"f32"}),`
            ${d.registerUniforms(b).declareVariables(f,c)}
            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${c.offsetToIndices("global_idx")};

            var value = ${m}(0);
            ${g}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(E.size(r)/64)},programUniforms:n}),getShaderSource:l}},Xd=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),i=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,a=e[0].dims.length,n=new Int32Array(2*a).fill(0);if(e.length>=4){let u=e[3].getBigInt64Array();for(let l=0;l<u.length;l++)n[Number(u[l])]=Number(r[l]),n[Number(u[l])+a]=Number(r[l+u.length])}else r.forEach((u,l)=>n[Number(l)]=Number(u));let s=[];return n.forEach(u=>s.push(u)),{mode:t.mode,value:i,pads:s}}else return t},Jd=(e,t)=>{Ld(e.inputs);let r=Xd(e.inputs,t);e.compute(jd(e.inputs,r),{inputs:[0]})}}),Kt,oa,ua,la,da,Yd,Qd,pa,ca,ep,tp,fa,rp,ip,ha,ap,np,sp,op,Xh=M(()=>{Ge(),Q(),re(),ne(),Kt=e=>{if(ge.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},oa=(e,t,r)=>{let i=t.format==="NHWC",a=e.dims.slice();i&&a.splice(1,0,a.pop());let n=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),u=t.strides.slice(),l=n?t.dilations.slice():[],d=t.pads.slice();cr.adjustPoolAttributes(r,a,s,u,l,d);let c=cr.computePoolOutputShape(r,a,u,l,s,d,t.autoPad),f=Object.assign({},t);n?Object.assign(f,{kernelShape:s,strides:u,pads:d,dilations:l,cacheKey:t.cacheKey}):Object.assign(f,{kernelShape:s,strides:u,pads:d,cacheKey:t.cacheKey});let m=c.slice();return m.push(m.splice(1,1)[0]),[f,i?m:c]},ua=(e,t)=>{let r=t.format==="NHWC",i=E.size(e),a=E.size(t.kernelShape),n=[{type:12,data:i},{type:12,data:a}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let u=t.kernelShape[t.kernelShape.length-1],l=t.strides[t.strides.length-1],d=t.pads[t.pads.length/2-1],c=t.pads[t.pads.length-1],f=!!(d+c);n.push({type:12,data:u},{type:12,data:l},{type:12,data:d},{type:12,data:c}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let m=!1;if(t.kernelShape.length===2){let g=t.kernelShape[t.kernelShape.length-2],b=t.strides[t.strides.length-2],_=t.pads[t.pads.length/2-2],x=t.pads[t.pads.length-2];m=!!(_+x),n.push({type:12,data:g},{type:12,data:b},{type:12,data:_},{type:12,data:x}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[n,s,!0,f,m]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let u=E.computeStrides(t.kernelShape);n.push({type:12,data:u},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:u.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let l=t.pads.reduce((d,c)=>d+c);return[n,s,!!l,!1,!1]}},la=(e,t,r,i,a,n,s,u,l,d,c,f)=>{let m=a.format==="NHWC",g=t.type.value,b=H("output",t.type.tensor,i);if(a.kernelShape.length<=2){let _="",x="",v="",w=r-(m?2:1);if(c?_=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${w}] = indices[${w}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${w}] < 0 || xIndices[${w}]
                      >= uniforms.x_shape[${w}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${n}
                }`:_=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${w}] = indices[${w}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${n}
                }`,a.kernelShape.length===2){let C=r-(m?3:2);f?x=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${C}] = indices[${C}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${C}] < 0 || xIndices[${C}] >= uniforms.x_shape[${C}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:x=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${C}] = indices[${C}] * uniforms.sh - uniforms.phStart + j;
                `,v=`
              }
            `}return`
            ${e.registerUniforms(l).declareVariables(t,b)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${b.offsetToIndices("global_idx")};
              var xIndices = ${b.offsetToIndices("global_idx")};

              var value = ${g}(${u});
              var pad = 0;
              ${x}
              ${_}
              ${v}
              ${s}

              output[global_idx] = value;
            }`}else{if(m)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let _=a.kernelShape.length,x=a.pads.length,v="";return d?v=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${n}
              }`:v=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${n}
            `,`
            ${e.registerUniforms(l).declareVariables(t,b)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${b.offsetToIndices("global_idx")};
              var xIndices = ${b.offsetToIndices("global_idx")};

              var offsets: array<u32, ${_}>;

              var value = ${g}(${u});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${_-1}u; j++) {
                  offsets[j] = offset / ${F("uniforms.kernelStrides","j",_)};
                  offset -= offsets[j] * ${F("uniforms.kernelStrides","j",_)};
                }
                offsets[${_-1}] = offset;

                isPad = false;
                for (var j = ${r-_}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${F("uniforms.strides",`j - ${r-_}u`,_)}
                    + offsets[j - ${r-_}u] - ${F("uniforms.pads","j - 2u",x)};
                  ${v}
              }
              ${s}

              output[global_idx] = value;
            }`}},da=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Yd=e=>`${da(e)};${e.countIncludePad}`,Qd=e=>`${da(e)};${e.storageOrder};${e.dilations}`,pa=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),ca=(e,t,r,i)=>{let[a,n]=oa(t,i,r),s=O("x",t.dataType,t.dims.length),u=s.type.value,l="value += x_val;",d="";a.countIncludePad?d+=`value /= ${u}(uniforms.kernelSize);`:d+=`value /= ${u}(i32(uniforms.kernelSize) - pad);`;let[c,f,m,g,b]=ua(n,a);c.push(...j(t.dims,n));let _=["rank"];return{name:e,shaderCache:{hint:`${i.cacheKey};${m};${g};${b}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:n,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(E.size(n)/64)},programUniforms:c}),getShaderSource:x=>la(x,s,t.dims.length,n.length,a,l,d,0,f,m,g,b)}},ep=e=>{let t=e.count_include_pad!==0,r=pa(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let i={countIncludePad:t,...r,cacheKey:""};return{...i,cacheKey:Yd(i)}},tp=(e,t)=>{Kt(e.inputs),e.compute(ca("AveragePool",e.inputs[0],!1,t))},fa={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},rp=e=>{let t=e.format;return{format:t,...fa,cacheKey:t}},ip=(e,t)=>{Kt(e.inputs),e.compute(ca("GlobalAveragePool",e.inputs[0],!0,t))},ha=(e,t,r,i)=>{let[a,n]=oa(t,i,r),s=`
      value = max(x_val, value);
    `,u="",l=O("x",t.dataType,t.dims.length),d=["rank"],[c,f,m,g,b]=ua(n,a);return c.push(...j(t.dims,n)),{name:e,shaderCache:{hint:`${i.cacheKey};${m};${g};${b}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:n,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(E.size(n)/64)},programUniforms:c}),getShaderSource:_=>la(_,l,t.dims.length,n.length,a,s,u,t.dataType===10?-65504:-1e5,f,m,g,b)}},ap=(e,t)=>{Kt(e.inputs),e.compute(ha("MaxPool",e.inputs[0],!1,t))},np=e=>{let t=e.storage_order,r=e.dilations,i=pa(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(i.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let a={storageOrder:t,dilations:r,...i,cacheKey:""};return{...a,cacheKey:Qd(a)}},sp=e=>{let t=e.format;return{format:t,...fa,cacheKey:t}},op=(e,t)=>{Kt(e.inputs),e.compute(ha("GlobalMaxPool",e.inputs[0],!0,t))}}),up,lp,dp,pp,Jh=M(()=>{Q(),re(),we(),ne(),up=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,i)=>r===e[2].dims[i]).reduce((r,i)=>r&&i,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((a,n)=>n===t.axis||a===e[0].dims[n]).reduce((a,n)=>a&&n,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],i=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/i)||t.blockSize>Math.ceil(r/(i-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},lp=(e,t)=>{let r=E.normalizeAxis(t.axis,e[0].dims.length),i=e[0].dataType,a=i===3,n=e[0].dims,s=e[1].dataType,u=E.size(n),l=i===3||i===2,d=l?[Math.ceil(E.size(e[0].dims)/4)]:e[0].dims,c=e[1].dims,f=e.length>2?e[2]:void 0,m=f?l?[Math.ceil(E.size(f.dims)/4)]:f.dims:void 0,g=c.length===0||c.length===1&&c[0]===1,b=g===!1&&c.length===1,_=_e(u),x=g&&(!l||_===4),v=x?_:1,w=x&&!l?_:1,C=O("input",l?12:i,d.length,w),I=O("scale",s,c.length),A=f?O("zero_point",l?12:i,m.length):void 0,T=H("output",s,n.length,v),S=[C,I];A&&S.push(A);let z=[d,c];f&&z.push(m);let D=[{type:12,data:u/v},{type:12,data:r},{type:12,data:t.blockSize},...j(...z,n)],U=X=>{let Z=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${X.registerUniforms(Z).declareVariables(...S,T)}
      ${X.mainStart()}
          ${X.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${T.offsetToIndices("global_idx")};

          // Set input x
          ${l?`
            let input = ${C.getByOffset("global_idx / 4")};
            let x_vec = ${a?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${v===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${C.getByOffset("global_idx")};`};

          // Set scale input
          ${g?`let scale_value= ${I.getByOffset("0")}`:b?`
            let scale_index = ${T.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${I.getByOffset("scale_index")};`:`
            var scale_indices: ${I.type.indices} = output_indices;
            let index = ${I.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${I.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${I.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${A?g?l?`
                let zero_point_input = ${A.getByOffset("0")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${A.getByOffset("0")}`:b?l?`
                let zero_point_index = ${T.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${A.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${T.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${A.getByOffset("zero_point_index")};`:l?`
                let zero_point_offset = ${I.indicesToOffset("scale_indices")};
                let zero_point_input = ${A.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${A.getByIndices("scale_indices")};`:`let zero_point_value = ${l?a?"i32":"u32":C.type.value}(0);`};
      // Compute and write output
      ${T.setByOffset("global_idx",`${T.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:A?["rank","rank","rank"]:["rank","rank"]},getShaderSource:U,getRunData:()=>({outputs:[{dims:n,dataType:s}],dispatchGroup:{x:Math.ceil(u/v/64),y:1,z:1},programUniforms:D})}},dp=(e,t)=>{up(e.inputs,t),e.compute(lp(e.inputs,t))},pp=e=>ce({axis:e.axis,blockSize:e.blockSize})}),cp,fp,hp,Yh=M(()=>{Ge(),Q(),ne(),cp=(e,t,r)=>{let i=e===t,a=e<t&&r<0,n=e>t&&r>0;if(i||a||n)throw new Error("Range these inputs' contents are invalid.")},fp=(e,t,r,i)=>{let a=Math.abs(Math.ceil((t-e)/r)),n=[a],s=a,u=[{type:12,data:s},{type:i,data:e},{type:i,data:r},...j(n)],l=d=>{let c=H("output",i,n.length),f=c.type.value,m=[{name:"outputSize",type:"u32"},{name:"start",type:f},{name:"delta",type:f}];return`
        ${d.registerUniforms(m).declareVariables(c)}
        ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${f}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${i}`},getShaderSource:l,getRunData:()=>({outputs:[{dims:n,dataType:i}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:u})}},hp=e=>{let t=0,r=0,i=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],i=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],i=e.inputs[2].getFloat32Array()[0]),ge.webgpu.validateInputContent&&cp(t,r,i),e.compute(fp(t,r,i,e.inputs[0].dataType),{inputs:[]})}}),mp,ma,ga,gp,bp,yp,Qh=M(()=>{Q(),re(),we(),ne(),mp=(e,t,r,i)=>{if(e!=="none"&&i!=="i32"&&i!=="u32"&&i!=="f32")throw new Error(`Input ${i} is not supported with reduction ${e}.`);let a=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,n=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return i==="i32"||i==="u32"?`atomicAdd(&${t}, bitcast<${i}>(${r}));`:`
              ${a}bitcast<${i}>(oldValue) + (${r})${n}`;case"max":return i==="i32"||i==="u32"?`atomicMax(&${t}, bitcast<${i}>(${r}));`:`
                ${a}max(bitcast<f32>(oldValue), (${r}))${n}`;case"min":return i==="i32"||i==="u32"?`atomicMin(&${t}, bitcast<${i}>(${r}));`:`${a}min(bitcast<${i}>(oldValue), (${r}))${n}`;case"mul":return`${a}(bitcast<${i}>(oldValue) * (${r}))${n}`;default:throw new Error(`Reduction ${e} is not supported.`)}},ma=(e,t)=>`${e===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[${t?"i - indices_start":"i"}];
    let dim_value = uniforms.output_shape[${t?"i - indices_start":"i"} + uniforms.last_index_dimension];`}
    
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));`,ga=(e,t,r)=>`for (var i = 0u; i < uniforms.num_updates_elements; i++) {
        let value = updates[uniforms.num_updates_elements * ${r?"global_idx":"idx"} + i];
        ${mp(e.reduction,"output[data_offset + i]","value",t)}
      }`,gp=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r,n=1,s=Math.ceil(E.size(i)/n),u=i[i.length-1],l=E.sizeFromDimension(r,u),d=E.sizeFromDimension(i,0)/u,c=[{type:12,data:s},{type:12,data:u},{type:12,data:l},...j(e[1].dims,e[2].dims,a)],f=m=>{let g=O("indices",e[1].dataType,e[1].dims.length),b=O("updates",e[2].dataType,e[2].dims.length,n),_=t.reduction!=="none"&&t.reduction!==""?Is("output",e[0].dataType,a.length):H("output",e[0].dataType,a.length,n);return`
      ${m.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(g,b,_)}
      ${m.mainStart()}
        ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var hasDuplicates = false;
  if (${t.reduction==="none"}) {
    for (var i = 0; i < ${d}; i = i + 1) {
      for (var j = i + 1; j < ${d}; j = j + 1) {
        var index_i = i32(indices[i].x);
        var index_j = i32(indices[j].x);
        if (index_i == index_j) {
          hasDuplicates = true;
          break;
        }
      }
      if (hasDuplicates) {
        break;
      }
    }
  }

  if (${t.reduction==="none"} && hasDuplicates) {
    if (global_idx != 0u) {
      return;
    }
    // Process each index-update pair individually when duplicates exist
    for (var idx = 0u; idx < ${d}u; idx++) {
      var data_offset = 0u;
      for (var i = 0u; i < uniforms.last_index_dimension; i++) {
        var index = i32(indices[idx * uniforms.last_index_dimension + i].x);
        ${ma(r.length,!1)}
      }
      ${ga(t,_.type.value,!1)}
    }
    return;
  }

  var data_offset = 0u;
  var indices_start = uniforms.last_index_dimension * global_idx;
  var indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${ma(r.length,!0)}
  }
  ${ga(t,_.type.value,!0)}
  }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:c}),getShaderSource:f}},bp=e=>ce({reduction:e.reduction}),yp=(e,t)=>{e.compute(gp(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),_p,wp,$p,ba,vp,Ip,xp,Cp,Ap,kp,Sp,Tp,ya,Ep,zp,Bp,Op,Rp,Np,Dp,em=M(()=>{Q(),re(),we(),ne(),_p=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},wp=(e,t,r)=>{t.every(a=>a>=0&&a<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let i=new Array(r).fill(1);return t.forEach((a,n)=>i[a]=e[n]),i},$p=(e,t,r,i,a,n)=>{let[s,u,l]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],d=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(c=>n.push(c));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0){if(e[u].getFloat32Array().forEach(c=>i.push(c)),i.length!==0&&i.length!==d&&r>=18&&i.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");_p(i,t),t.axes.length>0&&wp(i,t.axes,d).forEach((c,f)=>i[f]=c)}if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0&&(e[l].getBigInt64Array().forEach(c=>a.push(Number(c))),a.length!==0&&a.length!==d&&r>=18&&a.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(a.length!==0&&a.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof i<"u"&&typeof a<"u"&&i.length>0&&a.length>d)throw new Error("Resize requires only of scales or sizes to be specified")},ba=(e,t,r,i)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${i}(big / (${r}));
  let fract = ${i}(big % (${r})) / ${i}(${r});
  return whole + fract;
`,vp=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${ba("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${ba("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Ip=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",xp=(e,t,r)=>{let i=new Array(r).fill(0).concat(new Array(r).fill(1)),a=e.length===0?i:e.slice();return t.length>0?(t.forEach((n,s)=>{i[n]=a[s],i[s+r]=a[t.length+s]}),i):a},Cp=(e,t,r,i)=>{let a=[];if(r.length>0)if(i.length>0){if(e.forEach(n=>a.push(n)),Math.max(...i)>e.length)throw new Error("axes is out of bound");i.forEach((n,s)=>a[n]=r[s])}else r.forEach(n=>a.push(n));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");a=e.map((n,s)=>Math.round(n*t[s]))}return a},Ap=(e,t,r)=>{let i=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(n=>t[n]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(n=>t[n]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let a=e.slice();return r.axes.length>0?(r.axes.forEach(n=>t[n]=i),r.axes.forEach(n=>a[n]=Math.round(e[n]*t[n]))):(t.fill(i,0,t.length),a.forEach((n,s)=>a[s]=Math.round(n*t[s]))),a},kp=(e,t,r,i,a)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${F("uniforms.scales","i",i)};
        var roi_low = ${F("uniforms.roi","i",a)};
        var roi_hi = ${F("uniforms.roi",`i + ${t.length}`,a)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${F("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${F("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,Sp=(e,t,r,i,a,n,s)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${F("uniforms.scales","i",a)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${F("uniforms.roi","i",n)};
          var roi_hi = ${F("uniforms.roi",`i + ${r.length}`,n)};
          var input_shape_i = ${F("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${F("uniforms.output_shape","i",i.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${s} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,Tp=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${F("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,ya=(e,t,r,i)=>e.rank>i?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",Ep=(e,t,r,i,a)=>{let[n,s,u,l]=r.length===2?[-1,0,1,-1]:[0,2,3,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(col, ${r[u]} - 1))`)};
      ${ya(e,l,n,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${d} = originalIndices[${s}];
      var col:${d} = originalIndices[${u}];
      ${i?`if (row < 0 || row > (${r[s]} - 1) || col < 0 || col > (${r[u]} - 1)) {
        return ${a};
      }`:""};
      row = max(0, min(row, ${r[s]} - 1));
      col = max(0, min(col, ${r[u]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${n}])`:"0"};
      var x11: ${d} = getInputValue(batch, channel, row1, col1);
      var x12: ${d} = getInputValue(batch, channel, row1, col2);
      var x21: ${d} = getInputValue(batch, channel, row2, col1);
      var x22: ${d} = getInputValue(batch, channel, row2, col2);
      var dx1: ${d} = abs(row - ${d}(row1));
      var dx2: ${d} = abs(${d}(row2) - row);
      var dy1: ${d} = abs(col - ${d}(col1));
      var dy2: ${d} = abs(${d}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},zp=(e,t,r,i,a,n,s,u,l,d)=>{let c=r.length===2,[f,m]=c?[0,1]:[2,3],g=e.type.value,b=_=>{let x=_===f?"row":"col";return`
      fn ${x}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${g} {
        var output_index = ${t.indicesGet("output_indices",_)};
        var originalIdx: ${g} = getOriginalCoordinateFromResizedCoordinate(output_index, ${a[_]},
        ${i[_]}, ${r[_]}, ${n[_]}, ${n[_]} + ${r.length});
        var fractOriginalIdx: ${g} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${u} && (originalIdx < 0 || originalIdx > (${r[_]} - 1))) {
          return ${l};
        }
        var data: array<${g}, 4> = array<${g}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${x}: ${g} = originalIdx + ${g}(i);
          if (${x} < 0 || ${x} >= ${r[_]}) {
            ${d?`coefs[i + 1] = 0.0;
                        continue;`:u?`return ${l};`:`${x} = max(0, min(${x}, ${r[_]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",_,`u32(${x})`)};
          data[i + 1] = ${_===f?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${b(f)};
    ${b(m)};
  fn getCubicInterpolationCoefs(s: ${g}) -> array<${g}, 4> {
    var absS = abs(s);
    var coeffs: array<${g}, 4> = array<${g}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${g} = 1.0 - absS;
    var twoMinusAbsS: ${g} = 2.0 - absS;
    var onePlusAbsS: ${g} = 1.0 + absS;
    coeffs[0] = ((${s} * onePlusAbsS - 5 * ${s}) * onePlusAbsS + 8 * ${s}) * onePlusAbsS - 4 * ${s};
    coeffs[1] = ((${s} + 2) * absS - (${s} + 3)) * absS * absS + 1;
    coeffs[2] = ((${s} + 2) * oneMinusAbsS - (${s} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${s} * twoMinusAbsS - 5 * ${s}) * twoMinusAbsS + 8 * ${s}) * twoMinusAbsS - 4 * ${s};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${g}, 4>, coefs: array<${g}, 4>) -> ${g} {
    var coefsSum: ${g} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${g} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},Bp=(e,t,r,i,a)=>{let[n,s,u,l,d]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],c=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${c} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(height, ${r[u]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(width, ${r[l]} - 1))`)};
      ${ya(e,d,n,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${c} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${c} = originalIndices[${s}];
      var height:${c} = originalIndices[${u}];
      var width:${c} = originalIndices[${l}];
      ${i?`if (depth < 0 || depth > (${r[s]} - 1) || height < 0 || height > (${r[u]} - 1) || width < 0 || (width > ${r[l]} - 1)) {
      return ${a};
        }`:""};

    depth = max(0, min(depth, ${r[s]} - 1));
      height = max(0, min(height, ${r[u]} - 1));
      width = max(0, min(width, ${r[l]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${d}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${n}])`:"0"};

      var x111: ${c} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${c} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${c} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${c} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${c} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${c} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${c} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${c} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${c} = abs(depth - ${c}(depth1));
      var dx2: ${c} = abs(${c}(depth2) - depth);
      var dy1: ${c} = abs(height - ${c}(height1));
      var dy2: ${c} = abs(${c}(height2) - height);
      var dz1: ${c} = abs(width - ${c}(width1));
      var dz2: ${c} = abs(${c}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},Op=(e,t,r,i,a,n)=>{let s=e.dims,u=xp(n,t.axes,s.length),l=Cp(s,i,a,t.axes),d=i.slice();i.length===0&&(d=s.map((w,C)=>w===0?1:l[C]/w),t.keepAspectRatioPolicy!=="stretch"&&(l=Ap(s,d,t)));let c=H("output",e.dataType,l.length),f=O("input",e.dataType,s.length),m=E.size(l),g=s.length===l.length&&s.every((w,C)=>w===l[C]),b=t.coordinateTransformMode==="tf_crop_and_resize",_=t.extrapolationValue,x=f.type.value,v=w=>`
      ${g?"":`
      ${vp(t.coordinateTransformMode,x)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${Tp(f,s)};
              ${Ip(t.nearestMode,r,x)};
              ${Sp(f,c,s,l,d.length,u.length,b)};
              `;case"linear":return`
              ${kp(c,s,l,d.length,u.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${Ep(f,c,s,b,_)}`;if(s.length===3||s.length===5)return`${Bp(f,c,s,b,_)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${zp(f,c,s,l,d,u,t.cubicCoeffA,b,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${w.registerUniform("output_size","u32").registerUniform("scales","f32",d.length).registerUniform("roi","f32",u.length).declareVariables(f,c)}
      ${w.mainStart()}
        ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${g?"output[global_idx] = input[global_idx];":`
        let output_indices = ${c.offsetToIndices("global_idx")};
        var input_indices: ${f.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${f.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${s.length===2||s.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${d.length>0?t.mode==="cubic"?d:d.length:""}|${a.length>0?a:""}|${u.length>0?u:""}|${g}|${t.mode==="nearest"?s.length:s}`,inputDependencies:["rank"]},getShaderSource:v,getRunData:()=>({outputs:[{dims:l,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},{type:1,data:d},{type:1,data:u},...j(s,l)]})}},Rp=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},Np=(e,t)=>{let r=[],i=[],a=[],n=Rp(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");$p(e.inputs,t,n,r,i,a),e.compute(Op(e.inputs[0],t,n,r,i,a),{inputs:[0]})},Dp=e=>{let t=e.antialias,r=e.axes,i=e.coordinateTransformMode,a=e.cubicCoeffA,n=e.excludeOutside!==0,s=e.extrapolationValue,u=e.keepAspectRatioPolicy,l=e.mode,d=e.nearestMode===""?"simple":e.nearestMode;return ce({antialias:t,axes:r,coordinateTransformMode:i,cubicCoeffA:a,excludeOutside:n,extrapolationValue:s,keepAspectRatioPolicy:u,mode:l,nearestMode:d})}}),Wp,Mp,Vp,tm=M(()=>{Q(),re(),ne(),Wp=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],i=e[2];if(t.dataType!==r.dataType||t.dataType!==i.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let a=t.dims[t.dims.length-1],n=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==a)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==n)throw new Error("Skip must have the same sequence length as input");if(i.dims.length!==1)throw new Error("Gamma must be 1D");if(i.dims[i.dims.length-1]!==a)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==a)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==a)throw new Error("Bias must have the same hidden size as input")}},Mp=(e,t,r,i)=>{let a=t.simplified,n=e[0].dims,s=E.size(n),u=n,l=s,d=n.slice(-1)[0],c=i?n.slice(0,-1).concat(1):[],f=!a&&e.length>3,m=e.length>4,g=i&&r>1,b=i&&r>2,_=r>3,x=64,v=_e(d),w=[{type:12,data:l},{type:12,data:v},{type:12,data:d},{type:1,data:t.epsilon}],C=A=>{let T=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],S=[O("x",e[0].dataType,e[0].dims,v),O("skip",e[1].dataType,e[1].dims,v),O("gamma",e[2].dataType,e[2].dims,v)];f&&S.push(O("beta",e[3].dataType,e[3].dims,v)),m&&S.push(O("bias",e[4].dataType,e[4].dims,v)),S.push(H("output",e[0].dataType,u,v)),g&&S.push(H("mean_output",1,c)),b&&S.push(H("inv_std_output",1,c)),_&&S.push(H("input_skip_bias_sum",e[0].dataType,u,v));let z=xe(e[0].dataType),D=xe(1,v);return`

      ${A.registerUniforms(T).declareVariables(...S)}
      var<workgroup> sum_shared : array<${D}, ${x}>;
      var<workgroup> sum_squared_shared : array<${D}, ${x}>;

      ${A.mainStart([x,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${x};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${x};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${x-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${m?"bias[offset1d + i]":z+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${_?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${zt(z,v,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${x};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${at("sum",v)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${at("square_sum",v)} / f32(uniforms.hidden_size) ${a?"":"- mean * mean"} + uniforms.epsilon);
        ${g?"mean_output[global_idx] = mean;":""}
        ${b?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${a?"":`- ${z}(mean)`}) *
            ${z}(inv_std_dev) * gamma[offset1d + i]
            ${f?"+ beta[offset1d + i]":""};
        }
      }`},I=[{dims:u,dataType:e[0].dataType}];return r>1&&I.push({dims:c,dataType:1}),r>2&&I.push({dims:c,dataType:1}),r>3&&I.push({dims:n,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${v};${g};${b};${_}`,inputDependencies:e.map((A,T)=>"type")},getShaderSource:C,getRunData:()=>({outputs:I,dispatchGroup:{x:Math.ceil(l/d)},programUniforms:w})}},Vp=(e,t)=>{Wp(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(Mp(e.inputs,t,e.outputCount,!1),{outputs:r})}}),Gp,jt,Up,_a,Pp,Lp,Zp,Hp,rm=M(()=>{Q(),re(),we(),ne(),Gp=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,i)=>{if(e[i+1].dataType!==6&&e[i+1].dataType!==7)throw new Error(`Input ${i} must be an array of int32 or int64`)})},jt=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(i=>r.push(Number(i)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(i=>r.push(Number(i)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},Up=(e,t)=>{if(e.length>1){let r=jt(e,1),i=jt(e,2),a=jt(e,3);return a.length===0&&(a=[...Array(e[0].dims.length).keys()]),ce({starts:r,ends:i,axes:a})}else return t},_a=(e,t,r,i,a)=>{let n=e;return e<0&&(n+=r[i[t]]),a[t]<0?Math.max(0,Math.min(n,r[i[t]]-1)):Math.max(0,Math.min(n,r[i[t]]))},Pp=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length}; i >= 0; i--) {
            let input_shape_i = ${F("uniforms.input_shape","i",r.length)};
            let steps_i = ${F("uniforms.steps","i",r.length)};
            let signs_i = ${F("uniforms.signs","i",r.length)};
            let starts_i = ${F("uniforms.starts","i",r.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,Lp=(e,t)=>{let r=e[0].dims,i=E.size(r),a=t.axes.length>0?E.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],n=jt(e,4);n.forEach(v=>v!==0||(()=>{throw new Error("step cannot be 0")})),n.length===0&&(n=Array(a.length).fill(1));let s=t.starts.map((v,w)=>_a(v,w,r,a,n)),u=t.ends.map((v,w)=>_a(v,w,r,a,n));if(a.length!==s.length||a.length!==u.length)throw new Error("start, ends and axes should have the same number of elements");if(a.length!==r.length)for(let v=0;v<r.length;++v)a.includes(v)||(s.splice(v,0,0),u.splice(v,0,r[v]),n.splice(v,0,1));let l=n.map(v=>Math.sign(v));n.forEach((v,w,C)=>{if(v<0){let I=(u[w]-s[w])/v,A=s[w],T=A+I*n[w];s[w]=T,u[w]=A,C[w]=-v}});let d=r.slice(0);a.forEach((v,w)=>{d[v]=Math.ceil((u[v]-s[v])/n[v])});let c={dims:d,dataType:e[0].dataType},f=H("output",e[0].dataType,d.length),m=O("input",e[0].dataType,e[0].dims.length),g=E.size(d),b=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:l.length},{name:"steps",type:"u32",length:n.length}],_=[{type:12,data:g},{type:12,data:s},{type:6,data:l},{type:12,data:n},...j(e[0].dims,d)],x=v=>`
      ${v.registerUniforms(b).declareVariables(m,f)}
        ${Pp(m,f,r)}
        ${v.mainStart()}
          ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${f.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${f.setByOffset("global_idx",m.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${l.length}_${s.length}_${n.length}`,inputDependencies:["rank"]},getShaderSource:x,getRunData:()=>({outputs:[c],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:_})}},Zp=(e,t)=>{Gp(e.inputs,t);let r=Up(e.inputs,t);e.compute(Lp(e.inputs,r),{inputs:[0]})},Hp=e=>{let t=e.starts,r=e.ends,i=e.axes;return ce({starts:t,ends:r,axes:i})}}),Fp,qp,Kp,jp,im=M(()=>{Q(),re(),we(),nt(),ne(),Fp=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},qp=(e,t)=>{let r=e.inputs[0],i=r.dims,a=E.size(i),n=i.length,s=E.normalizeAxis(t.axis,n),u=s<i.length-1,l,d=[];u?(d=Array.from({length:n},(S,z)=>z),d[s]=n-1,d[n-1]=s,l=e.compute(Oe(r,d),{inputs:[r],outputs:[-1]})[0]):l=r;let c=l.dims,f=c[n-1],m=a/f,g=_e(f),b=f/g,_=64;m===1&&(_=256);let x=(S,z)=>z===4?`max(max(${S}.x, ${S}.y), max(${S}.z, ${S}.w))`:z===2?`max(${S}.x, ${S}.y)`:z===3?`max(max(${S}.x, ${S}.y), ${S}.z)`:S,v=O("x",l.dataType,l.dims,g),w=H("result",l.dataType,l.dims,g),C=v.type.value,I=xe(l.dataType)==="f32"?`var threadMax = ${C}(-3.402823e+38f);`:`var threadMax = ${C}(-65504.0h);`,A=S=>`
      var<workgroup> rowMaxShared : ${C};
      var<workgroup> rowSumShared : ${C};
      var<workgroup> threadShared : array<${C}, ${_}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${C} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${C}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${S.registerUniform("packedCols","i32").declareVariables(v,w)}
      ${S.mainStart(_)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${_};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${I}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${C}(${x("threadShared[0]",g)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${C}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${C}(${at("threadShared[0]",g)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          let value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          setValue(row, col, row_stride, value);
        }
      }`,T=e.compute({name:"Softmax",shaderCache:{hint:`${g};${_}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:c,dataType:l.dataType}],dispatchGroup:{x:m},programUniforms:[{type:6,data:b}]}),getShaderSource:A},{inputs:[l],outputs:[u?-1:0]})[0];u&&e.compute(Oe(T,d),{inputs:[T]})},Kp=(e,t)=>{Fp(e.inputs),qp(e,t)},jp=e=>ce({axis:e.axis})}),wa,Xp,Jp,Yp,Qp,am=M(()=>{Q(),re(),ne(),wa=e=>Array.from(e.getBigInt64Array(),Number),Xp=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(wa(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},Jp=(e,t)=>{let r=[];for(let i=0;i<e.length;++i)r.push(e[i]*t[i]);return r},Yp=(e,t)=>{let r=e[0].dims,i=t??wa(e[1]),a=Jp(r,i),n=E.size(a),s=e[0].dataType,u=O("input",s,r.length),l=H("output",s,a.length),d=c=>`
      const inputShape = ${u.indices(...r)};
      ${c.registerUniform("output_size","u32").declareVariables(u,l)}
      ${c.mainStart()}
      ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${l.offsetToIndices("global_idx")};
      var input_indices: ${u.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${u.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${l.indicesGet("output_indices","i")}  % input_dim_i;

        ${u.indicesSet("input_indices","i","input_dim_value")}
      }
      ${l.setByOffset("global_idx",u.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${i}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:[{type:12,data:n},...j(e[0].dims,a)]}),getShaderSource:d}},Qp=e=>{Xp(e.inputs),e.compute(Yp(e.inputs),{inputs:[0]})}}),ec,tc,rc,nm=M(()=>{Q(),re(),ne(),ec=(e,t,r,i,a)=>{let n=H("output_data",a,r.length,4),s=O("a_data",t[1].dataType,t[1].dims.length,4),u=O("b_data",t[2].dataType,t[2].dims.length,4),l=O("c_data",t[0].dataType,t[0].dims.length,4),d,c=(f,m,g)=>`select(${m}, ${f}, ${g})`;if(!i)d=n.setByOffset("global_idx",c(s.getByOffset("global_idx"),u.getByOffset("global_idx"),l.getByOffset("global_idx")));else{let f=(m,g,b="")=>{let _=`a_data[index_a${g}][component_a${g}]`,x=`b_data[index_b${g}][component_b${g}]`,v=`bool(c_data[index_c${g}] & (0xffu << (component_c${g} * 8)))`;return`
            let output_indices${g} = ${n.offsetToIndices(`global_idx * 4u + ${g}u`)};
            let offset_a${g} = ${s.broadcastedIndicesToOffset(`output_indices${g}`,n)};
            let offset_b${g} = ${u.broadcastedIndicesToOffset(`output_indices${g}`,n)};
            let offset_c${g} = ${l.broadcastedIndicesToOffset(`output_indices${g}`,n)};
            let index_a${g} = offset_a${g} / 4u;
            let index_b${g} = offset_b${g} / 4u;
            let index_c${g} = offset_c${g} / 4u;
            let component_a${g} = offset_a${g} % 4u;
            let component_b${g} = offset_b${g} % 4u;
            let component_c${g} = offset_c${g} % 4u;
            ${m}[${g}] = ${b}(${c(_,x,v)});
          `};a===9?d=`
            var data = vec4<u32>(0);
            ${f("data",0,"u32")}
            ${f("data",1,"u32")}
            ${f("data",2,"u32")}
            ${f("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:d=`
            ${f("output_data[global_idx]",0)}
            ${f("output_data[global_idx]",1)}
            ${f("output_data[global_idx]",2)}
            ${f("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(l,s,u,n)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${d}
      }`},tc=e=>{let t=e[1].dims,r=e[2].dims,i=e[0].dims,a=e[1].dataType,n=!(E.areEqual(t,r)&&E.areEqual(r,i)),s=t,u=E.size(t);if(n){let d=Tt.calcShape(Tt.calcShape(t,r,!1),i,!1);if(!d)throw new Error("Can't perform where op on the given tensors");s=d,u=E.size(s)}let l=Math.ceil(u/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:d=>ec(d,e,s,n,a),getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(u/64/4)},programUniforms:[{type:12,data:l},...j(i,t,r,s)]})}},rc=e=>{e.compute(tc(e.inputs))}}),ic,sm=M(()=>{wh(),Ri(),$h(),vh(),Ih(),xh(),Ch(),Eh(),Bh(),Oh(),Rh(),Nh(),Dh(),Wh(),Mh(),Vh(),Gh(),Uh(),Ph(),Lh(),Zh(),Hh(),Fh(),qh(),Kh(),md(),jh(),Xh(),Jh(),Yh(),Qh(),zi(),em(),Cd(),tm(),rm(),im(),vd(),am(),nt(),Mi(),nm(),ic=new Map([["Abs",[Wo]],["Acos",[Mo]],["Acosh",[Vo]],["Add",[Au]],["ArgMax",[vo,Oi]],["ArgMin",[$o,Oi]],["Asin",[Go]],["Asinh",[Uo]],["Atan",[Po]],["Atanh",[Lo]],["Attention",[So]],["AveragePool",[tp,ep]],["BatchNormalization",[Bo]],["BiasAdd",[No]],["BiasSplitGelu",[Iu]],["Cast",[Ho,Zo]],["Ceil",[Ko]],["Clip",[qo]],["Concat",[Gu,Uu]],["Conv",[Ji,ji]],["ConvTranspose",[hl,pl]],["Cos",[jo]],["Cosh",[Xo]],["CumSum",[gl,bl]],["DepthToSpace",[$l,vl]],["DequantizeLinear",[dp,pp]],["Div",[ku]],["Einsum",[Sl,Tl]],["Elu",[Jo,Lt]],["Equal",[Su]],["Erf",[Yo]],["Exp",[Qo]],["Expand",[Ol]],["FastGelu",[Nl]],["Floor",[eu]],["FusedConv",[Ji,ji]],["Gather",[Vl,Ml]],["GatherElements",[Xl,jl]],["GatherBlockQuantized",[Hl,Fl]],["GatherND",[Ul,Pl]],["Gelu",[tu]],["Gemm",[ed,Ql]],["GlobalAveragePool",[ip,rp]],["GlobalMaxPool",[op,sp]],["Greater",[Bu]],["GreaterOrEqual",[Ru]],["GridSample",[ld,dd]],["GroupQueryAttention",[Td]],["HardSigmoid",[lu,uu]],["InstanceNormalization",[Bd]],["LayerNormalization",[Nd]],["LeakyRelu",[ru,Lt]],["Less",[Ou]],["LessOrEqual",[Nu]],["Log",[bu]],["MatMul",[Wd]],["MatMulNBits",[Ud,Pd]],["MaxPool",[ap,np]],["Mul",[Tu]],["MultiHeadAttention",[hd,cd]],["Neg",[au]],["Not",[iu]],["Pad",[Jd]],["Pow",[Eu]],["QuickGelu",[wu,Lt]],["Range",[hp]],["Reciprocal",[nu]],["ReduceMin",[go]],["ReduceMean",[po]],["ReduceMax",[mo]],["ReduceSum",[yo]],["ReduceProd",[bo]],["ReduceL1",[co]],["ReduceL2",[fo]],["ReduceLogSum",[wo]],["ReduceLogSumExp",[ho]],["ReduceSumSquare",[_o]],["Relu",[su]],["Resize",[Np,Dp]],["RotaryEmbedding",[xd]],["ScatterND",[yp,bp]],["Sigmoid",[ou]],["Sin",[du]],["Sinh",[pu]],["Slice",[Zp,Hp]],["SkipLayerNormalization",[Vp]],["Split",[wd,$d]],["Sqrt",[cu]],["Softmax",[Kp,jp]],["Sub",[zu]],["Tan",[fu]],["Tanh",[hu]],["ThresholdedRelu",[gu,Lt]],["Tile",[Qp]],["Transpose",[zs,Bs]],["Where",[rc]]])}),ac,om=M(()=>{Ge(),Qe(),ne(),ac=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,i,a){qe(e.programInfo.name);let n=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let u=[];for(let d of t)u.push({binding:u.length,resource:{buffer:d.buffer}});for(let d of r)u.push({binding:u.length,resource:{buffer:d.buffer}});a&&u.push({binding:u.length,resource:a});let l=n.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:u,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let d={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:l,dispatchGroup:i};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(d)}s.setPipeline(e.computePipeline),s.setBindGroup(0,l),s.dispatchWorkgroups(...i),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Ve(e.programInfo.name)}dispose(){}build(e,t){qe(e.name);let r=this.backend.device,i=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(d=>{r.features.has(d.feature)&&i.push(`enable ${d.extension};`)});let a=Cs(t,this.backend.device.limits),n=e.getShaderSource(a),s=`${i.join(`
`)}
${a.additionalImplementations}
${n}`,u=r.createShaderModule({code:s,label:e.name});le("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let l=r.createComputePipeline({compute:{module:u,entryPoint:"main"},layout:"auto",label:e.name});return Ve(e.name),{programInfo:e,computePipeline:l,uniformVariablesInfo:a.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,i=typeof e=="number"?1:e.z||1,a=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=a&&r<=a&&i<=a)return[t,r,i];let n=t*r*i,s=Math.ceil(Math.sqrt(n));if(s>a){if(s=Math.ceil(Math.cbrt(n)),s>a)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),nc={};kt(nc,{WebGpuBackend:()=>lc});var sc,oc,uc,lc,um=M(()=>{Ge(),Q(),Qe(),ps(),yh(),sm(),om(),sc=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let i=0;i<e.length;++i){let a=e[i].dataType;switch(t[i]){case"none":{r.push("");break}case"type":{r.push(`${a}`);break}case"rank":{let n=e[i].dims.length;r.push(`${a};${n}`);break}case"dims":{let n=e[i].dims.join(",");r.push(`${a};${n}`);break}default:throw new Error(`unsupported input dependency: ${t[i]}`)}}return r.join("|")},oc=(e,t,r)=>{let i=e.name;return e.shaderCache?.hint&&(i+="["+e.shaderCache.hint+"]"),i+=":"+r+`:${sc(t,e.shaderCache?.inputDependencies??new Array(t.length).fill("dims"))}`,i},uc=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},lc=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],i={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},a=n=>t.features.has(n)&&r.push(n)&&!0;a("chromium-experimental-timestamp-query-inside-passes")||a("timestamp-query"),a("shader-f16"),a("subgroups"),this.device=await t.requestDevice(i),this.adapterInfo=new uc(t.info||await t.requestAdapterInfo()),this.gpuDataManager=$s(this),this.programManager=new ac(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,hi(e.logLevel,!!e.debug),this.device.onuncapturederror=n=>{n.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${n.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;qe(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let a=r[i],n=a.kernelId,s=this.kernels.get(n),u=s.kernelType,l=s.kernelName,d=a.programName,c=a.inputTensorViews,f=a.outputTensorViews,m=t[i*2],g=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=m);let b=Number(m-this.queryTimeBase),_=Number(g-this.queryTimeBase);if(!Number.isSafeInteger(b)||!Number.isSafeInteger(_))throw new RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:c.map(x=>({dims:x.dims,dataType:Ye(x.dataType)})),outputsMetadata:f.map(x=>({dims:x.dims,dataType:Ye(x.dataType)})),kernelId:n,kernelType:u,kernelName:l,programName:d,startTime:b,endTime:_});else{let x="";c.forEach((w,C)=>{x+=`input[${C}]: [${w.dims}] | ${Ye(w.dataType)}, `});let v="";f.forEach((w,C)=>{v+=`output[${C}]: [${w.dims}] | ${Ye(w.dataType)}, `}),console.log(`[profiling] kernel "${n}|${u}|${l}|${d}" ${x}${v}execution time: ${_-b} ns`)}sr("GPU",`${d}::${m}::${g}`)}e.unmap(),this.pendingQueries.delete(e)}),Ve()}run(e,t,r,i,a,n){qe(e.name);let s=[];for(let w=0;w<t.length;++w){let C=t[w].data;if(C===0)continue;let I=this.gpuDataManager.get(C);if(!I)throw new Error(`no GPU data for input: ${C}`);s.push(I)}let{outputs:u,dispatchGroup:l,programUniforms:d}=e.getRunData(t),c=r.length===0?u.map((w,C)=>C):r;if(c.length!==u.length)throw new Error(`Output size ${c.length} must be equal to ${u.length}.`);let f=[],m=[];for(let w=0;w<u.length;++w){if(!Number.isInteger(c[w])||c[w]<-3||c[w]>=n)throw new Error(`Invalid output index: ${c[w]}`);if(c[w]===-3)continue;let C=c[w]===-1,I=c[w]===-2,A=C||I?a(u[w].dataType,u[w].dims):i(c[w],u[w].dataType,u[w].dims);if(f.push(A),A.data===0)continue;let T=this.gpuDataManager.get(A.data);if(!T)throw new Error(`no GPU data for output: ${A.data}`);if(C&&this.temporaryData.push(T),I){let S=this.kernelPersistentData.get(this.currentKernelId);S||(S=[],this.kernelPersistentData.set(this.currentKernelId,S)),S.push(T)}m.push(T)}if(s.length!==t.length||m.length!==f.length){if(m.length===0)return Ve(e.name),f;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let g;if(d){let w=0,C=[];d.forEach(S=>{let z=typeof S.data=="number"?[S.data]:S.data;if(z.length===0)return;let D=S.type===10?2:4,U,X;S.type===10?(X=z.length>4?16:z.length>2?8:z.length*D,U=z.length>4?16:D*z.length):(X=z.length<=2?z.length*D:16,U=16),w=Math.ceil(w/X)*X,C.push(w);let Z=S.type===10?8:4;w+=z.length>4?Math.ceil(z.length/Z)*U:z.length*D});let I=16;w=Math.ceil(w/I)*I;let A=new ArrayBuffer(w);d.forEach((S,z)=>{let D=C[z],U=typeof S.data=="number"?[S.data]:S.data;if(S.type===6)new Int32Array(A,D,U.length).set(U);else if(S.type===12)new Uint32Array(A,D,U.length).set(U);else if(S.type===10)new Uint16Array(A,D,U.length).set(U);else if(S.type===1)new Float32Array(A,D,U.length).set(U);else throw new Error(`Unsupported uniform type: ${Ye(S.type)}`)});let T=this.gpuDataManager.create(w,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(T.buffer,0,A,0,w),this.gpuDataManager.release(T.id),g={offset:0,size:w,buffer:T.buffer}}let b=this.programManager.normalizeDispatchGroupSize(l),_=b[1]===1&&b[2]===1,x=oc(e,t,_),v=this.programManager.getArtifact(x);if(v||(v=this.programManager.build(e,b),this.programManager.setArtifact(x,v),le("info",()=>`[artifact] key: ${x}, programName: ${e.name}`)),d&&v.uniformVariablesInfo){if(d.length!==v.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${v.uniformVariablesInfo.length}, got ${d.length} in program "${v.programInfo.name}".`);for(let w=0;w<d.length;w++){let C=d[w],I=C.type,A=typeof C.data=="number"?1:C.data.length,[T,S]=v.uniformVariablesInfo[w];if(I!==T||A!==S)throw new Error(`Uniform variable ${w} mismatch: expect type ${T} with size ${S}, got type ${I} with size ${A} in program "${v.programInfo.name}".`)}}if(le("info",()=>`[ProgramManager] run "${e.name}" (key=${x}) with ${b[0]}x${b[1]}x${b[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let w={kernelId:this.currentKernelId,programName:v.programInfo.name,inputTensorViews:t,outputTensorViews:f};this.pendingKernels.push(w),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(w)}return this.programManager.run(v,s,m,b,g),Ve(e.name),f}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,i){let a=ic.get(e);if(!a)throw new Error(`kernel not implemented: ${e}`);let n={kernelType:e,kernelName:i,kernelEntry:a[0],attributes:[a[1],r]};this.kernels.set(t,n)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let i=this.kernels.get(e);if(!i)throw new Error(`kernel not created: ${e}`);let a=i.kernelType,n=i.kernelName,s=i.kernelEntry,u=i.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${a}] ${n}" is not allowed to be called recursively`);this.currentKernelId=e,u[0]&&(u[1]=u[0](u[1]),u[0]=void 0),le("info",()=>`[WebGPU] Start to run kernel "[${a}] ${n}"...`);let l=this.env.debug;this.temporaryData=[];try{return l&&this.device.pushErrorScope("validation"),s(t,u[1]),0}catch(d){return r.push(Promise.resolve(`[WebGPU] Kernel "[${a}] ${n}" failed. ${d}`)),1}finally{l&&r.push(this.device.popErrorScope().then(d=>d?`GPU validation error for kernel "[${a}] ${n}": ${d.message}`:null));for(let d of this.temporaryData)this.gpuDataManager.release(d.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,i){let a=this.sessionExternalDataMapping.get(e);a||(a=new Map,this.sessionExternalDataMapping.set(e,a));let n=a.get(t),s=this.gpuDataManager.registerExternalBuffer(r,i,n);return a.set(t,[s,r]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let i=await Ai(this,e,t);return mi(i.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){le("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){le("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){le("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let i=0;i<r;i++){let a=this.getComputePassEncoder(),n=e[i];this.writeTimestamp(this.pendingDispatchNumber*2),a.setPipeline(n.computePipeline),a.setBindGroup(0,n.bindGroup),a.dispatchWorkgroups(...n.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[i]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),dc={};kt(dc,{init:()=>cc});var xr,pc,cc,lm=M(()=>{Q(),Qe(),re(),bh(),xr=class Ff{constructor(t,r,i,a){this.module=t,this.dataType=r,this.data=i,this.dims=a}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=E.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=E.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=E.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=E.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(E.size(t)!==E.size(this.dims))throw new Error("Invalid new shape");return new Ff(this.module,this.dataType,this.data,t)}},pc=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let i=e.PTR_SIZE,a=r/e.PTR_SIZE,n=i===4?"i32":"i64";this.opKernelContext=Number(e.getValue(i*a++,n));let s=Number(e.getValue(i*a++,n));this.outputCount=Number(e.getValue(i*a++,n)),this.customDataOffset=Number(e.getValue(i*a++,"*")),this.customDataSize=Number(e.getValue(i*a++,n));let u=[];for(let l=0;l<s;l++){let d=Number(e.getValue(i*a++,n)),c=Number(e.getValue(i*a++,"*")),f=Number(e.getValue(i*a++,n)),m=[];for(let g=0;g<f;g++)m.push(Number(e.getValue(i*a++,n)));u.push(new xr(e,d,c,m))}this.inputs=u}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){let r=t?.inputs?.map(s=>typeof s=="number"?this.inputs[s]:s)??this.inputs,i=t?.outputs??[],a=(s,u,l)=>new xr(this.module,u,this.output(s,l),l),n=(s,u)=>{let l=bt(s,u);if(!l)throw new Error(`Unsupported data type: ${s}`);let d=l>0?this.backend.gpuDataManager.create(l).id:0;return new xr(this.module,s,d,u)};return this.backend.run(e,r,i,a,n,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let i=this.module.PTR_SIZE,a=i===4?"i32":"i64",n=this.module.stackAlloc((1+t.length)*i);this.module.setValue(n,t.length,a);for(let s=0;s<t.length;s++)this.module.setValue(n+i*(s+1),t[s],a);return this.module._JsepOutput(this.opKernelContext,e,n)}catch(i){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${i}`)}finally{this.module.stackRestore(r)}}},cc=async(e,t,r,i)=>{let a=t.jsepInit;if(!a)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let n=(um(),Nt(nc)).WebGpuBackend,s=new n;await s.initialize(r,i),a("webgpu",[s,u=>s.alloc(Number(u)),u=>s.free(u),(u,l,d,c=!1)=>{if(c)le("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(u)}, dst=${Number(l)}, size=${Number(d)}`),s.memcpy(Number(u),Number(l));else{le("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(u)}, gpuDataId=${Number(l)}, size=${Number(d)}`);let f=t.HEAPU8.subarray(Number(u>>>0),Number(u>>>0)+Number(d));s.upload(Number(l),f)}},async(u,l,d)=>{le("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${u}, dataOffset=${l}, size=${d}`),await s.download(Number(u),()=>t.HEAPU8.subarray(Number(l)>>>0,Number(l+d)>>>0))},(u,l,d)=>s.createKernel(u,Number(l),d,t.UTF8ToString(t._JsepGetNodeName(Number(l)))),u=>s.releaseKernel(u),(u,l,d,c)=>{le("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${u}, contextDataOffset=${l}`);let f=new pc(t,s,Number(l));return s.computeKernel(Number(u),f,c)},()=>s.captureBegin(),()=>s.captureEnd(),()=>s.replay()])}else{let n=new bs(r);a("webnn",[n,()=>n.reserveTensorId(),s=>n.releaseTensorId(s),async(s,u,l,d,c)=>n.ensureTensor(s,u,l,d,c),(s,u)=>{n.uploadTensor(s,u)},async(s,u)=>n.downloadTensor(s,u)])}}}),fc,$a,va,st,hc,Ia,Cr,xa,Ca,Aa,ka,Sa,Ta,mc=M(()=>{hh(),mh(),Q(),mt(),li(),ts(),fc=(e,t)=>{me()._OrtInit(e,t)!==0&&fe("Can't initialize onnxruntime.")},$a=async e=>{fc(e.wasm.numThreads,pr(e.logLevel))},va=async(e,t)=>{me().asyncInit?.();{let r=(lm(),Nt(dc)).init;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");let i=e.webgpu.adapter;if(i){if(typeof i.limits!="object"||typeof i.features!="object"||typeof i.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let a=e.webgpu.powerPreference;if(a!==void 0&&a!=="low-power"&&a!=="high-performance")throw new Error(`Invalid powerPreference setting: "${a}"`);let n=e.webgpu.forceFallbackAdapter;if(n!==void 0&&typeof n!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${n}"`);if(i=await navigator.gpu.requestAdapter({powerPreference:a,forceFallbackAdapter:n}),!i)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}await r("webgpu",me(),e,i)}if(t==="webnn"){if(typeof navigator>"u"||!navigator.ml)throw new Error("WebNN is not supported in current environment");await r("webnn",me(),e)}}},st=new Map,hc=e=>{let t=me(),r=t.stackSave();try{let i=t.PTR_SIZE,a=t.stackAlloc(2*i);t._OrtGetInputOutputCount(e,a,a+i)!==0&&fe("Can't get session input/output count.");let n=i===4?"i32":"i64";return[Number(t.getValue(a,n)),Number(t.getValue(a+i,n))]}finally{t.stackRestore(r)}},Ia=(e,t)=>{let r=me(),i=r.stackSave(),a=0;try{let n=r.PTR_SIZE,s=r.stackAlloc(2*n);r._OrtGetInputOutputMetadata(e,t,s,s+n)!==0&&fe("Can't get session input/output metadata.");let u=Number(r.getValue(s,"*"));a=Number(r.getValue(s+n,"*"));let l=r.HEAP32[a/4];if(l===0)return[u,0];let d=r.HEAPU32[a/4+1],c=[];for(let f=0;f<d;f++){let m=Number(r.getValue(a+8+f*n,"*"));c.push(m!==0?r.UTF8ToString(m):Number(r.getValue(a+8+(f+d)*n,"*")))}return[u,l,c]}finally{r.stackRestore(i),a!==0&&r._OrtFree(a)}},Cr=e=>{let t=me(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},xa=async(e,t)=>{let r,i,a=me();Array.isArray(e)?[r,i]=e:e.buffer===a.HEAPU8.buffer?[r,i]=[e.byteOffset,e.byteLength]:[r,i]=Cr(e);let n=0,s=0,u=0,l=[],d=[],c=[];try{if([s,l]=await es(t),t?.externalData&&a.mountExternalData){let I=[];for(let A of t.externalData){let T=typeof A=="string"?A:A.path;I.push(fi(typeof A=="string"?A:A.data).then(S=>{a.mountExternalData(T,S)}))}await Promise.all(I)}for(let I of t?.executionProviders??[])if((typeof I=="string"?I:I.name)==="webnn"){if(a.shouldTransferToMLTensor=!1,typeof I!="string"){let A=I,T=A?.context,S=A?.gpuDevice,z=A?.deviceType,D=A?.powerPreference;T?a.currentContext=T:S?a.currentContext=await a.webnnCreateMLContext(S):a.currentContext=await a.webnnCreateMLContext({deviceType:z,powerPreference:D})}else a.currentContext=await a.webnnCreateMLContext();break}n=await a._OrtCreateSession(r,i,s),a.webgpuOnCreateSession?.(n),n===0&&fe("Can't create a session."),a.jsepOnCreateSession?.(),a.currentContext&&(a.webnnRegisterMLContext(n,a.currentContext),a.currentContext=void 0,a.shouldTransferToMLTensor=!0);let[f,m]=hc(n),g=!!t?.enableGraphCapture,b=[],_=[],x=[],v=[],w=[];for(let I=0;I<f;I++){let[A,T,S]=Ia(n,I);A===0&&fe("Can't get an input name."),d.push(A);let z=a.UTF8ToString(A);b.push(z),x.push(T===0?{name:z,isTensor:!1}:{name:z,isTensor:!0,type:Ye(T),shape:S})}for(let I=0;I<m;I++){let[A,T,S]=Ia(n,I+f);A===0&&fe("Can't get an output name."),c.push(A);let z=a.UTF8ToString(A);_.push(z),v.push(T===0?{name:z,isTensor:!1}:{name:z,isTensor:!0,type:Ye(T),shape:S});{if(g&&t?.preferredOutputLocation===void 0){w.push("gpu-buffer");continue}let D=typeof t?.preferredOutputLocation=="string"?t.preferredOutputLocation:t?.preferredOutputLocation?.[z]??"cpu",U=a.webnnIsGraphOutput;if(D==="cpu"&&U&&U(n,z)){w.push("ml-tensor-cpu-output");continue}if(D!=="cpu"&&D!=="cpu-pinned"&&D!=="gpu-buffer"&&D!=="ml-tensor")throw new Error(`Not supported preferred output location: ${D}.`);if(g&&D!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${D}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);w.push(D)}}let C=null;return w.some(I=>I==="gpu-buffer"||I==="ml-tensor"||I==="ml-tensor-cpu-output")&&(u=a._OrtCreateBinding(n),u===0&&fe("Can't create IO binding."),C={handle:u,outputPreferredLocations:w,outputPreferredLocationsEncoded:w.map(I=>I==="ml-tensor-cpu-output"?"ml-tensor":I).map(I=>ci(I))}),st.set(n,[n,d,c,C,g,!1]),[n,b,_,x,v]}catch(f){throw d.forEach(m=>a._OrtFree(m)),c.forEach(m=>a._OrtFree(m)),u!==0&&a._OrtReleaseBinding(u)!==0&&fe("Can't release IO binding."),n!==0&&a._OrtReleaseSession(n)!==0&&fe("Can't release session."),f}finally{a._free(r),s!==0&&a._OrtReleaseSessionOptions(s)!==0&&fe("Can't release session options."),l.forEach(f=>a._free(f)),a.unmountExternalData?.()}},Ca=e=>{let t=me(),r=st.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[i,a,n,s,u]=r;s&&(u&&t._OrtClearBoundOutputs(s.handle)!==0&&fe("Can't clear bound outputs."),t._OrtReleaseBinding(s.handle)!==0&&fe("Can't release IO binding.")),t.jsepOnReleaseSession?.(e),t.webnnOnReleaseSession?.(e),t.webgpuOnReleaseSession?.(e),a.forEach(l=>t._OrtFree(l)),n.forEach(l=>t._OrtFree(l)),t._OrtReleaseSession(i)!==0&&fe("Can't release session."),st.delete(e)},Aa=async(e,t,r,i,a,n,s=!1)=>{if(!e){t.push(0);return}let u=me(),l=u.PTR_SIZE,d=e[0],c=e[1],f=e[3],m=f,g,b;if(d==="string"&&(f==="gpu-buffer"||f==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(s&&f!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${n} when enableGraphCapture is true.`);if(f==="gpu-buffer"){let v=e[2].gpuBuffer;b=bt(gt(d),c);{let w=u.jsepRegisterBuffer;if(!w)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');g=w(i,n,v,b)}}else if(f==="ml-tensor"){let v=e[2].mlTensor;b=bt(gt(d),c);let w=u.webnnRegisterMLTensor;if(!w)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');g=w(i,v,gt(d),c)}else{let v=e[2];if(Array.isArray(v)){b=l*v.length,g=u._malloc(b),r.push(g);for(let w=0;w<v.length;w++){if(typeof v[w]!="string")throw new TypeError(`tensor data at index ${w} is not a string`);u.setValue(g+w*l,Ue(v[w],r),"*")}}else{let w=u.webnnIsGraphInput,C=u.webnnIsGraphOutput;if(d!=="string"&&w&&C){let I=u.UTF8ToString(a);if(w(i,I)||C(i,I)){let A=gt(d);b=bt(A,c),m="ml-tensor";let T=u.webnnCreateTemporaryTensor,S=u.webnnUploadTensor;if(!T||!S)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let z=await T(i,A,c);S(z,new Uint8Array(v.buffer,v.byteOffset,v.byteLength)),g=z}else b=v.byteLength,g=u._malloc(b),r.push(g),u.HEAPU8.set(new Uint8Array(v.buffer,v.byteOffset,b),g)}else b=v.byteLength,g=u._malloc(b),r.push(g),u.HEAPU8.set(new Uint8Array(v.buffer,v.byteOffset,b),g)}}let _=u.stackSave(),x=u.stackAlloc(4*c.length);try{c.forEach((w,C)=>u.setValue(x+C*l,w,l===4?"i32":"i64"));let v=u._OrtCreateTensor(gt(d),g,b,x,c.length,ci(m));v===0&&fe(`Can't create tensor for input/output. session=${i}, index=${n}.`),t.push(v)}finally{u.stackRestore(_)}},ka=async(e,t,r,i,a,n)=>{let s=me(),u=s.PTR_SIZE,l=st.get(e);if(!l)throw new Error(`cannot run inference. invalid session id: ${e}`);let d=l[0],c=l[1],f=l[2],m=l[3],g=l[4],b=l[5],_=t.length,x=i.length,v=0,w=[],C=[],I=[],A=[],T=s.stackSave(),S=s.stackAlloc(_*u),z=s.stackAlloc(_*u),D=s.stackAlloc(x*u),U=s.stackAlloc(x*u);try{[v,w]=jn(n);for(let V=0;V<_;V++)await Aa(r[V],C,A,e,c[t[V]],t[V],g);for(let V=0;V<x;V++)await Aa(a[V],I,A,e,f[i[V]],_+i[V],g);for(let V=0;V<_;V++)s.setValue(S+V*u,C[V],"*"),s.setValue(z+V*u,c[t[V]],"*");for(let V=0;V<x;V++)s.setValue(D+V*u,I[V],"*"),s.setValue(U+V*u,f[i[V]],"*");if(m&&!b){let{handle:V,outputPreferredLocations:ie,outputPreferredLocationsEncoded:J}=m;if(c.length!==_)throw new Error(`input count from feeds (${_}) is expected to be always equal to model's input count (${c.length}).`);for(let L=0;L<_;L++){let oe=t[L];await s._OrtBindInput(V,c[oe],C[L])!==0&&fe(`Can't bind input[${L}] for session=${e}.`)}for(let L=0;L<x;L++){let oe=i[L];a[L]?.[3]?s._OrtBindOutput(V,f[oe],I[L],0)!==0&&fe(`Can't bind pre-allocated output[${L}] for session=${e}.`):s._OrtBindOutput(V,f[oe],0,J[oe])!==0&&fe(`Can't bind output[${L}] to ${ie[L]} for session=${e}.`)}st.set(e,[d,c,f,m,g,!0])}s.jsepOnRunStart?.(d),s.webnnOnRunStart?.(d);let X;m?X=await s._OrtRunWithBinding(d,m.handle,x,D,v):X=await s._OrtRun(d,z,S,_,U,x,D,v),X!==0&&fe("failed to call OrtRun().");let Z=[],ee=[];for(let V=0;V<x;V++){let ie=Number(s.getValue(D+V*u,"*"));if(ie===I[V]){Z.push(a[V]);continue}let J=s.stackSave(),L=s.stackAlloc(4*u),oe=!1,q,ue=0;try{s._OrtGetTensorData(ie,L,L+u,L+2*u,L+3*u)!==0&&fe(`Can't access output tensor data on index ${V}.`);let N=u===4?"i32":"i64",G=Number(s.getValue(L,N));ue=s.getValue(L+u,"*");let te=s.getValue(L+u*2,"*"),B=Number(s.getValue(L+u*3,N)),ae=[];for(let ve=0;ve<B;ve++)ae.push(Number(s.getValue(te+ve*u,N)));s._OrtFree(te)!==0&&fe("Can't free memory for tensor dims.");let Te=ae.reduce((ve,be)=>ve*be,1);q=Ye(G);let De=m?.outputPreferredLocations[i[V]];if(q==="string"){if(De==="gpu-buffer"||De==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let ve=[];for(let be=0;be<Te;be++){let $e=s.getValue(ue+be*u,"*"),Er=s.getValue(ue+(be+1)*u,"*"),Yt=be===Te-1?void 0:Er-$e;ve.push(s.UTF8ToString($e,Yt))}Z.push([q,ae,ve,"cpu"])}else if(De==="gpu-buffer"&&Te>0){let ve=s.jsepGetBuffer;if(!ve)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let be=ve(ue),$e=bt(G,Te);if($e===void 0||!di(q))throw new Error(`Unsupported data type: ${q}`);oe=!0,Z.push([q,ae,{gpuBuffer:be,download:s.jsepCreateDownloader(be,$e,q),dispose:()=>{s._OrtReleaseTensor(ie)!==0&&fe("Can't release tensor.")}},"gpu-buffer"])}else if(De==="ml-tensor"&&Te>0){let ve=s.webnnEnsureTensor,be=s.webnnIsGraphInputOutputTypeSupported;if(!ve||!be)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(bt(G,Te)===void 0||!pi(q))throw new Error(`Unsupported data type: ${q}`);if(!be(e,q,!1))throw new Error(`preferredLocation "ml-tensor" for ${q} output is not supported by current WebNN Context.`);let $e=await ve(e,ue,G,ae,!1);oe=!0,Z.push([q,ae,{mlTensor:$e,download:s.webnnCreateMLTensorDownloader(ue,q),dispose:()=>{s.webnnReleaseTensorId(ue),s._OrtReleaseTensor(ie)}},"ml-tensor"])}else if(De==="ml-tensor-cpu-output"&&Te>0){let ve=s.webnnCreateMLTensorDownloader(ue,q)(),be=Z.length;oe=!0,ee.push((async()=>{let $e=[be,await ve];return s.webnnReleaseTensorId(ue),s._OrtReleaseTensor(ie),$e})()),Z.push([q,ae,[],"cpu"])}else{let ve=dr(q),be=new ve(Te);new Uint8Array(be.buffer,be.byteOffset,be.byteLength).set(s.HEAPU8.subarray(ue,ue+be.byteLength)),Z.push([q,ae,be,"cpu"])}}finally{s.stackRestore(J),q==="string"&&ue&&s._free(ue),oe||s._OrtReleaseTensor(ie)}}m&&!g&&(s._OrtClearBoundOutputs(m.handle)!==0&&fe("Can't clear bound outputs."),st.set(e,[d,c,f,m,g,!1]));for(let[V,ie]of await Promise.all(ee))Z[V][2]=ie;return Z}finally{s.webnnOnRunEnd?.(d),s.stackRestore(T),C.forEach(X=>s._OrtReleaseTensor(X)),I.forEach(X=>s._OrtReleaseTensor(X)),A.forEach(X=>s._free(X)),v!==0&&s._OrtReleaseRunOptions(v),w.forEach(X=>s._free(X))}},Sa=e=>{let t=me(),r=st.get(e);if(!r)throw new Error("invalid session id");let i=r[0],a=t._OrtEndProfiling(i);a===0&&fe("Can't get an profile file name."),t._OrtFree(a)},Ta=e=>{let t=[];for(let r of e){let i=r[2];!Array.isArray(i)&&"buffer"in i&&t.push(i.buffer)}return t}}),ot,Ne,Bt,Xt,Jt,Ar,Ea,kr,xt,Ct,gc,bc,yc,_c,wc,$c,vc,Ic,xc=M(()=>{Ge(),mc(),mt(),ni(),ot=()=>!!ge.wasm.proxy&&typeof document<"u",Bt=!1,Xt=!1,Jt=!1,kr=new Map,xt=(e,t)=>{let r=kr.get(e);r?r.push(t):kr.set(e,[t])},Ct=()=>{if(Bt||!Xt||Jt||!Ne)throw new Error("worker not ready")},gc=e=>{switch(e.data.type){case"init-wasm":Bt=!1,e.data.err?(Jt=!0,Ea[1](e.data.err)):(Xt=!0,Ea[0]()),Ar&&(URL.revokeObjectURL(Ar),Ar=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=kr.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},bc=async()=>{if(!Xt){if(Bt)throw new Error("multiple calls to 'initWasm()' detected.");if(Jt)throw new Error("previous call to 'initWasm()' failed.");if(Bt=!0,ot())return new Promise((e,t)=>{Ne?.terminate(),Zn().then(([r,i])=>{try{Ne=i,Ne.onerror=n=>t(n),Ne.onmessage=gc,Ea=[e,t];let a={type:"init-wasm",in:ge};!a.in.wasm.wasmPaths&&(r||ti)&&(a.in.wasm.wasmPaths={wasm:new URL(""+new URL("ort-wasm-simd-threaded.jsep-CLPRrI3A.wasm",self.location.href).href,self.location.href).href}),Ne.postMessage(a),Ar=r}catch(a){t(a)}},t)});try{await ui(ge.wasm),await $a(ge),Xt=!0}catch(e){throw Jt=!0,e}finally{Bt=!1}}},yc=async e=>{if(ot())return Ct(),new Promise((t,r)=>{xt("init-ep",[t,r]);let i={type:"init-ep",in:{epName:e,env:ge}};Ne.postMessage(i)});await va(ge,e)},_c=async e=>ot()?(Ct(),new Promise((t,r)=>{xt("copy-from",[t,r]);let i={type:"copy-from",in:{buffer:e}};Ne.postMessage(i,[e.buffer])})):Cr(e),wc=async(e,t)=>{if(ot()){if(t?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Ct(),new Promise((r,i)=>{xt("create",[r,i]);let a={type:"create",in:{model:e,options:{...t}}},n=[];e instanceof Uint8Array&&n.push(e.buffer),Ne.postMessage(a,n)})}else return xa(e,t)},$c=async e=>{if(ot())return Ct(),new Promise((t,r)=>{xt("release",[t,r]);let i={type:"release",in:e};Ne.postMessage(i)});Ca(e)},vc=async(e,t,r,i,a,n)=>{if(ot()){if(r.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(a.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return Ct(),new Promise((s,u)=>{xt("run",[s,u]);let l=r,d={type:"run",in:{sessionId:e,inputIndices:t,inputs:l,outputIndices:i,options:n}};Ne.postMessage(d,Ta(l))})}else return ka(e,t,r,i,a,n)},Ic=async e=>{if(ot())return Ct(),new Promise((t,r)=>{xt("end-profiling",[t,r]);let i={type:"end-profiling",in:e};Ne.postMessage(i)});Sa(e)}}),za,Cc,Ac,dm=M(()=>{Ge(),xc(),Q(),jr(),ts(),za=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Cc=e=>{switch(e[3]){case"cpu":return new Me(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!di(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:i,dispose:a}=e[2];return Me.fromGpuBuffer(r,{dataType:t,dims:e[1],download:i,dispose:a})}case"ml-tensor":{let t=e[0];if(!pi(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:i,dispose:a}=e[2];return Me.fromMLTensor(r,{dataType:t,dims:e[1],download:i,dispose:a})}default:throw new Error(`invalid data location: ${e[3]}`)}},Ac=class{async fetchModelAndCopyToWasmMemory(e){return _c(await fi(e))}async loadModel(e,t){qe();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await wc(r,t),Ve()}async dispose(){return $c(this.sessionId)}async run(e,t,r){qe();let i=[],a=[];Object.entries(e).forEach(f=>{let m=f[0],g=f[1],b=this.inputNames.indexOf(m);if(b===-1)throw new Error(`invalid input '${m}'`);i.push(g),a.push(b)});let n=[],s=[];Object.entries(t).forEach(f=>{let m=f[0],g=f[1],b=this.outputNames.indexOf(m);if(b===-1)throw new Error(`invalid output '${m}'`);n.push(g),s.push(b)});let u=i.map((f,m)=>za(f,()=>`input "${this.inputNames[a[m]]}"`)),l=n.map((f,m)=>f?za(f,()=>`output "${this.outputNames[s[m]]}"`):null),d=await vc(this.sessionId,a,u,s,l,r),c={};for(let f=0;f<d.length;f++)c[this.outputNames[s[f]]]=n[f]??Cc(d[f]);return Ve(),c}startProfiling(){}endProfiling(){Ic(this.sessionId)}}}),kc={};kt(kc,{OnnxruntimeWebAssemblyBackend:()=>Oa,initializeFlags:()=>Ba,wasmBackend:()=>Sc});var Ba,Oa,Sc,pm=M(()=>{Ge(),xc(),dm(),Ba=()=>{(typeof ge.wasm.initTimeout!="number"||ge.wasm.initTimeout<0)&&(ge.wasm.initTimeout=0);let e=ge.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),ge.wasm.simd=!1),typeof ge.wasm.proxy!="boolean"&&(ge.wasm.proxy=!1),typeof ge.wasm.trace!="boolean"&&(ge.wasm.trace=!1),typeof ge.wasm.numThreads!="number"||!Number.isInteger(ge.wasm.numThreads)||ge.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)ge.wasm.numThreads=1;else{let t=typeof navigator>"u"?Xf("node:os").cpus().length:navigator.hardwareConcurrency;ge.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},Oa=class{async init(e){Ba(),await bc(),await yc(e)}async createInferenceSessionHandler(e,t){let r=new Ac;return await r.loadModel(e,t),r}},Sc=new Oa});Ge(),Ge(),Ge();var cm="1.22.0";{let e=(pm(),Nt(kc)).wasmBackend;St("webgpu",e,5),St("webnn",e,5),St("cpu",e,10),St("wasm",e,10)}Object.defineProperty(ge.versions,"web",{value:cm,enumerable:!0});/**
* @license
* Copyright 2021 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class fm{fftSize;reverseTable;sinTable;cosTable;constructor(t){if((t&t-1)!==0)throw new Error("FFT size must be a power of 2.");this.fftSize=t,this.reverseTable=new Uint32Array(t),this.sinTable=new Float32Array(t),this.cosTable=new Float32Array(t);let r=1,i=t>>1;for(;r<t;){for(let a=0;a<r;a++)this.reverseTable[a+r]=this.reverseTable[a]+i;r=r<<1,i=i>>1}for(let a=0;a<t;a++){const n=-2*Math.PI*a/t;this.sinTable[a]=Math.sin(n),this.cosTable[a]=Math.cos(n)}}transform(t){for(let r=0;r<this.fftSize;r++){const i=this.reverseTable[r];r<i&&([t[r*2],t[i*2]]=[t[i*2],t[r*2]],[t[r*2+1],t[i*2+1]]=[t[i*2+1],t[r*2+1]])}for(let r=1;r<this.fftSize;r*=2){const i=2*r,a=this.fftSize/i;for(let n=0;n<this.fftSize;n+=i)for(let s=0;s<r;s++){const u=s*a,l=this.cosTable[u],d=this.sinTable[u],c=(n+s)*2,f=(n+s+r)*2,m=l*t[f]-d*t[f+1],g=l*t[f+1]+d*t[f],b=t[c],_=t[c+1];t[c]=b+m,t[c+1]=_+g,t[f]=b-m,t[f+1]=_-g}}}}class hm{fftSize;hopSize;fft;window;constructor(t,r){if(t<=0)throw new Error("FFT size must be positive.");if(r<=0)throw new Error("Hop size must be positive.");this.fftSize=t,this.hopSize=r,this.fft=new fm(t),this.window=this.generateHanningWindow()}generateHanningWindow(){const t=new Float32Array(this.fftSize);for(let r=0;r<this.fftSize;r++)t[r]=.5*(1-Math.cos(2*Math.PI*r/(this.fftSize-1)));return t}analyze(t){const r=[],i=new Float32Array(this.fftSize),a=new Float32Array(this.fftSize*2);for(let n=0;n+this.fftSize<=t.length;n+=this.hopSize){const s=t.subarray(n,n+this.fftSize);i.set(s);for(let u=0;u<this.fftSize;u++)i[u]*=this.window[u];for(let u=0;u<this.fftSize;u++)a[u*2]=i[u],a[u*2+1]=0;this.fft.transform(a),r.push(a.slice())}return r}}const Sr={MODEL_FILE:"model.onnx",VOCABULARY:["[UNK]","/","0","1","2","3","4","5","6","7","8","9","?","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","","","","","","",""," "],ABBREVIATION:{"":"AR","":"BT","":"HH","":"KN","":"SK","":"BK","":"UR"}},Ra={MODEL_FILE:"model_ja.onnx",VOCABULARY:["[UNK]"," ","）","0","1","2","3","4","5","6","7","8","9","?","、","」","゛","゜","ア","イ","ウ","エ","オ","カ","キ","ク","ケ","コ","サ","シ","ス","セ","ソ","タ","チ","ツ","テ","ト","ナ","ニ","ヌ","ネ","ノ","ハ","ヒ","フ","ヘ","ホ","マ","ミ","ム","メ","モ","ヤ","ユ","ヨ","ラ","リ","ル","レ","ロ","ワ","ヰ","ヱ","ヲ","ン","ー","本","訂","（"," "],ABBREVIATION:{本:"ﾎﾚ",訂:"ﾗﾀ"}};Object.fromEntries(Sr.VOCABULARY.map((e,t)=>[t,e]));const Na=256,mm=64,gm=3200;function bm(e,t,r,i,a=4){const n=r/i,s=2*Math.PI*r/t,u=Math.sin(s),l=Math.cos(s),d=u/(2*n),c=d,f=0,m=-d,g=1+d,b=-2*l,_=1-d,x=c/g,v=f/g,w=m/g,C=b/g,I=_/g;let A=e,T=new Float32Array(e.length);for(let S=0;S<a;S++){let z=0,D=0,U=0,X=0;for(let Z=0;Z<A.length;Z++){const ee=A[Z],V=x*ee+v*z+w*D-C*U-I*X;T[Z]=V,D=z,z=ee,X=U,U=V}A=T,S<a-1&&(T=new Float32Array(e.length))}return T}function ym(e){return e.map(t=>{const r=new Float32Array(Na/2+1);for(let i=0;i<r.length;i++){const a=t[i*2],n=t[i*2+1];r[i]=Math.sqrt(a*a+n*n)}return r})}function _m(e){const t=Na/2+1,r=Math.floor(t/4),i=r,a=t-r;return e.map(n=>n.slice(i,a))}function wm(e,t,r){let i=e;t!==null&&r>0&&(i=bm(e,gm,t,r));const n=new hm(Na,mm).analyze(i),s=ym(n);return _m(s)}function $m(e){const t=/(\S)\1+/g;return e.replace(t,(r,i)=>i+" ".repeat(r.length-1))}function vm(e,t="en"){const i=Object.entries((t==="ja"?Ra:Sr).ABBREVIATION);if(i.length===0)return[{text:e,isAbbreviation:!1}];const a=i.map(([d])=>d).join("|"),n=new RegExp(`(${a})`,"g"),s=[];let u=0,l;for(;(l=n.exec(e))!==null;){l.index>u&&s.push({text:e.slice(u,l.index),isAbbreviation:!1});const d=l[0],c=i.find(([m])=>m===d),f=c?c[1]:d;s.push({text:f,isAbbreviation:!0}),u=n.lastIndex}return u<e.length&&s.push({text:e.slice(u),isAbbreviation:!1}),s.length>0?s:[{text:e,isAbbreviation:!1}]}function Im(e,t,r="en"){const[i,a,n]=t,s=[],l=(r==="ja"?Ra:Sr).VOCABULARY;for(let d=0;d<i;d++){const c=[];for(let g=0;g<a;g++){let b=-1/0,_=0;const x=d*a*n+g*n;for(let v=0;v<n;v++)e[x+v]>b&&(b=e[x+v],_=v);c.push(_)}const f=c.map(g=>l[g]||"").join(""),m=vm($m(f),r);s.push(m)}return s}const xm={en:new URL(Object.assign({"../App.tsx":an,"../Decoder.tsx":nn,"../Scope.tsx":sn,"../const.ts":on,"../global.css":un,"../main.tsx":ln,"../model.onnx":dn,"../model_ja.onnx":pn,"../onnxruntime-web.d.ts":cn,"../stft.ts":fn,"../useDecode.ts":hn,"../vite-env.d.ts":mn})[`../${Sr.MODEL_FILE}`],self.location.href).href,ja:new URL(Object.assign({"../App.tsx":an,"../Decoder.tsx":nn,"../Scope.tsx":sn,"../const.ts":on,"../global.css":un,"../main.tsx":ln,"../model.onnx":dn,"../model_ja.onnx":pn,"../onnxruntime-web.d.ts":cn,"../stft.ts":fn,"../useDecode.ts":hn,"../vite-env.d.ts":mn})[`../${Ra.MODEL_FILE}`],self.location.href).href},Tr={en:null,ja:null};async function Tc(e){return Tr[e]||(ge.wasm.wasmPaths="https://cdn.jsdelivr.net/npm/onnxruntime-web@1.23.2/dist/",Tr[e]=await Kr.create(xm[e],{executionProviders:["wasm"]})),Tr[e]}async function Cm(e,t,r,i){const a=await Tc(i),n=wm(e,t,r),s=n.length;if(s===0)return[];const u=n[0].length,l=new Float32Array(s*u);for(let x=0;x<s;x++)l.set(n[x],x*u);const d=[1,s,u,1],c=new Me("float32",l,d),m={[a.inputNames[0]]:c},b=(await a.run(m))[a.outputNames[0]],_=Im(b.data,b.dims,i);return _.length>0?_[0]:[]}const Ec=self;Ec.onmessage=async e=>{const t=e.data,r=i=>Ec.postMessage(i);try{if(t.type==="loadModel"){await Tc(t.lang),r({id:t.id,type:"modelLoaded"});return}if(t.type==="runInference"){const i=await Cm(t.audioBuffer,t.filterFreq,t.filterWidth,t.lang);r({id:t.id,type:"inferenceResult",segments:i});return}r({id:t.id,type:"error",error:"Unsupported worker message type."})}catch(i){const a=i instanceof Error?i.message:"Unknown worker error";r({id:t.id,type:"error",error:a})}}})();
